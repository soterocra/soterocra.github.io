// Terminal mode — alternative view rendering content as a TUI / boot screen
function Terminal() {
  const lines = [
    { c: 'fg-3', t: '# soterocra.dev — last login Apr 25 09:42' },
    { c: 'fg-3', t: '' },
    { c: 'green', t: '$ whoami' },
    { c: 'fg-1', t: 'rafael sotero — software engineer · cloud architect' },
    { c: 'fg-2', t: 'staff engineer @ itaú unibanco · aws certified pro · uberlândia, BR' },
    { c: 'fg-3', t: '' },
    { c: 'green', t: '$ ls ~/articles' },
  ];

  return (
    <div style={{
      maxWidth: 1100, margin: '0 auto', padding: '32px 32px 96px',
    }}>
      <div style={{
        background: '#0A0D11', border: '1px solid #232934',
        borderRadius: 10, overflow: 'hidden',
        fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: 1.7,
        boxShadow: 'var(--shadow-md)',
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '10px 14px', background: '#14181F',
          borderBottom: '1px solid #232934',
        }}>
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#FF5F56' }} />
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#FFBD2E' }} />
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#27C93F' }} />
          <span style={{
            flex: 1, textAlign: 'center', color: '#98A2B3', fontSize: 11,
            letterSpacing: '.04em',
          }}>rafael@soterocra ~ — zsh — 110×40</span>
        </div>
        <div style={{ padding: '20px 22px', color: '#E4E7EC' }}>
          {lines.map((l, i) => (
            <TermLine key={i} className={l.c}>{l.t}</TermLine>
          ))}
          {/* Articles */}
          {ARTICLES.map((a, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '52px 1fr auto',
              gap: 14, padding: '2px 0',
            }}>
              <span style={{ color: '#5B8DF0' }}>{String(i+1).padStart(2,'0')}.</span>
              <a href={a.href} target="_blank" rel="noopener noreferrer" style={{
                color: '#E4E7EC', textDecoration: 'none',
                whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
              }}>
                <span style={{ color: '#22D866' }}>./</span>
                {a.title.toLowerCase().replace(/[^a-z0-9]+/g,'-').slice(0,52)}.md
              </a>
              <span style={{ color: '#667085' }}>{a.platformShort} · {a.readMin}m ↗</span>
            </div>
          ))}

          <div style={{ height: 14 }} />
          <TermLine className="green">$ ls ~/projects</TermLine>
          {PROJECTS.slice(0, 4).map((p, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '52px 1fr auto',
              gap: 14, padding: '2px 0',
            }}>
              <span style={{ color: '#5B8DF0' }}>{String(i+1).padStart(2,'0')}.</span>
              <a href={p.href} target={p.href.startsWith('http') ? '_blank' : undefined} style={{
                color: '#E4E7EC', textDecoration: 'none',
              }}>
                <span style={{ color: '#FFAF5B' }}>git/</span>{p.name}
              </a>
              <span style={{ color: '#667085' }}>{p.stack.join(' · ')}</span>
            </div>
          ))}

          <div style={{ height: 14 }} />
          <TermLine className="green">$ cat ~/contact.txt</TermLine>
          <div style={{ paddingLeft: 14, borderLeft: '2px solid #2D65E8', margin: '4px 0' }}>
            <div style={{ color: '#E4E7EC' }}>
              linkedin → <a href="https://www.linkedin.com/in/rafaelsotero" target="_blank" rel="noopener noreferrer" style={{ color: '#5B8DF0', textDecoration: 'underline' }}>linkedin.com/in/rafaelsotero</a>
            </div>
            <div style={{ color: '#E4E7EC' }}>
              github   → <a href="https://github.com/soterocra" target="_blank" rel="noopener noreferrer" style={{ color: '#5B8DF0', textDecoration: 'underline' }}>github.com/soterocra</a>
            </div>
            <div style={{ color: '#E4E7EC' }}>
              email    → <a href="mailto:me@soterocra.dev" style={{ color: '#5B8DF0', textDecoration: 'underline' }}>me@soterocra.dev</a>
            </div>
          </div>

          <div style={{ marginTop: 14, color: '#22D866' }}>
            $ <span className="cursor-blink" style={{
              display: 'inline-block', width: 8, height: 16, background: '#22D866',
              verticalAlign: '-3px', marginLeft: 2,
            }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function TermLine({ className, children }) {
  const colors = {
    'fg-1': '#E4E7EC',
    'fg-2': '#CDD2DA',
    'fg-3': '#667085',
    'green': '#22D866',
    'blue': '#5B8DF0',
    'orange': '#FFAF5B',
  };
  return <div style={{ color: colors[className] || '#E4E7EC', minHeight: '1.7em' }}>{children}</div>;
}

window.Terminal = Terminal;
