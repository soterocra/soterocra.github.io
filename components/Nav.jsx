// Top nav — sticky, blurred. Anchored single-page.
function Nav({ theme, onToggleTheme, terminalMode, onToggleTerminal, lang, onToggleLang }) {
  const t = useT();
  const links = [
    ['sobre', t('nav.sobre')],
    ['artigos', t('nav.artigos')],
    ['projetos', t('nav.projetos')],
    ['contribuicoes', t('nav.contribuicoes')],
    ['contato', t('nav.contato')],
  ];
  return (
    <nav style={{
      display: 'flex', alignItems: 'center', gap: 28,
      padding: '14px 32px',
      borderBottom: '1px solid var(--border)',
      background: 'color-mix(in srgb, var(--bg) 78%, transparent)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      position: 'sticky', top: 0, zIndex: 50,
    }}>
      <a href="#top" style={{
        display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none',
        fontFamily: 'var(--font-mono)', fontSize: 18, fontWeight: 600,
        color: 'var(--fg-1)', letterSpacing: '-.02em',
      }}>
        <img
          src={theme === 'dark' ? 'assets/logo-mark-dark.svg' : 'assets/logo-mark.svg'}
          alt="" style={{ width: 40, height: 40 }}
        />
        soterocra<span style={{ color: 'var(--accent)' }}>.dev</span>
      </a>
      <div className="nav-links" style={{ display: 'flex', gap: 22, marginLeft: 8 }}>
        {links.map(([k, label]) => (
          <a key={k} href={`#${k}`} style={{
            fontFamily: 'var(--font-ui)', fontSize: 14, textDecoration: 'none',
            color: 'var(--fg-2)', fontWeight: 500, padding: '6px 0',
          }}>{label}</a>
        ))}
      </div>
      <span style={{ flex: 1 }} />
      <button onClick={onToggleLang} title="Idioma / Language"
        style={{
          background: 'transparent', border: '1px solid var(--border)',
          borderRadius: 8, padding: '6px 10px', cursor: 'pointer',
          fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-2)',
          fontWeight: 600, letterSpacing: '.04em',
          display: 'inline-flex', alignItems: 'center', gap: 6,
        }}>
        <span style={{ color: lang === 'pt' ? 'var(--accent)' : 'var(--fg-3)' }}>PT</span>
        <span style={{ color: 'var(--fg-4)' }}>/</span>
        <span style={{ color: lang === 'en' ? 'var(--accent)' : 'var(--fg-3)' }}>EN</span>
      </button>
      <button onClick={onToggleTerminal} title="Modo terminal"
        style={{
          background: terminalMode ? 'var(--accent-soft)' : 'transparent',
          border: '1px solid var(--border)', borderRadius: 8,
          padding: '6px 10px', cursor: 'pointer',
          fontFamily: 'var(--font-mono)', fontSize: 12,
          color: terminalMode ? 'var(--accent)' : 'var(--fg-2)',
          display: 'inline-flex', alignItems: 'center', gap: 6,
        }}>
        <span style={{ opacity: .7 }}>{'>'}_</span> {t('nav.terminal')}
      </button>
      <button onClick={onToggleTheme} title="Alternar tema"
        style={{
          background: 'transparent', border: '1px solid var(--border)',
          borderRadius: 8, padding: '6px 10px', cursor: 'pointer',
          fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-2)',
        }}>
        {theme === 'dark' ? '☾ dark' : '☀ light'}
      </button>
    </nav>
  );
}
window.Nav = Nav;
