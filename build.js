const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');
const BABEL_OPTS = { presets: [['@babel/preset-react', { runtime: 'classic' }]] };

fs.mkdirSync(path.join(DIST, 'components'), { recursive: true });
fs.mkdirSync(path.join(DIST, 'assets'), { recursive: true });
fs.mkdirSync(path.join(DIST, 'fonts'), { recursive: true });

// Transpile each JSX component to plain JS
const componentsDir = path.join(ROOT, 'components');
for (const file of fs.readdirSync(componentsDir)) {
  if (!file.endsWith('.jsx')) continue;
  const code = fs.readFileSync(path.join(componentsDir, file), 'utf-8');
  const { code: transpiled } = babel.transformSync(code, BABEL_OPTS);
  const outFile = file.replace('.jsx', '.js');
  fs.writeFileSync(path.join(DIST, 'components', outFile), transpiled);
  console.log(`  ✓ components/${outFile}`);
}

// Process the main HTML file
let html = fs.readFileSync(path.join(ROOT, 'soterocra.dev.html'), 'utf-8');

// Remove Babel standalone — transpilation now happens at build time
html = html.replace(/<script[^>]*babel\.min\.js[^>]*><\/script>\n?/g, '');

// Convert external component script tags: text/babel + .jsx → text/javascript + .js
html = html.replace(
  /<script type="text\/babel" src="components\/([^"]+)\.jsx"><\/script>/g,
  '<script src="components/$1.js"></script>'
);

// Transpile the inline App block (the only remaining text/babel script)
html = html.replace(/<script type="text\/babel">([\s\S]*?)<\/script>/, (_, jsxCode) => {
  const { code: transpiled } = babel.transformSync(jsxCode, BABEL_OPTS);
  return `<script>${transpiled}</script>`;
});

fs.writeFileSync(path.join(DIST, 'index.html'), html);
console.log('  ✓ index.html');

// Copy static files
for (const file of fs.readdirSync(path.join(ROOT, 'assets'))) {
  fs.copyFileSync(path.join(ROOT, 'assets', file), path.join(DIST, 'assets', file));
}
for (const file of fs.readdirSync(path.join(ROOT, 'fonts'))) {
  fs.copyFileSync(path.join(ROOT, 'fonts', file), path.join(DIST, 'fonts', file));
}
fs.copyFileSync(path.join(ROOT, 'colors_and_type.css'), path.join(DIST, 'colors_and_type.css'));

// Copy CNAME so GitHub Pages preserves the custom domain after merge
if (fs.existsSync(path.join(ROOT, 'CNAME'))) {
  fs.copyFileSync(path.join(ROOT, 'CNAME'), path.join(DIST, 'CNAME'));
  console.log('  ✓ CNAME');
}

// Ship the Pages deploy workflow so it lives on main and triggers when
// a deploy PR is merged. Without this, main would have no workflow and
// GitHub would fall back to the legacy Pages build (which uses old
// action versions and emits Node.js deprecation warnings).
const PAGES_WF_REL = '.github/workflows/pages-deploy.yml';
const pagesWfSrc = path.join(ROOT, PAGES_WF_REL);
if (fs.existsSync(pagesWfSrc)) {
  fs.mkdirSync(path.join(DIST, '.github', 'workflows'), { recursive: true });
  fs.copyFileSync(pagesWfSrc, path.join(DIST, PAGES_WF_REL));
  console.log(`  ✓ ${PAGES_WF_REL}`);
}

console.log('\nBuild complete → dist/');
