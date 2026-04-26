// Footer — minimal
function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '24px 32px',
      display: 'grid', gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center', gap: 16,
      fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-3)',
      maxWidth: 1100, margin: '0 auto', width: '100%', boxSizing: 'border-box',
    }}>
      <span style={{ fontWeight: 600, color: 'var(--fg-2)', letterSpacing: '-.02em' }}>
        soterocra<span style={{ color: 'var(--accent)' }}>.dev</span>
      </span>
      <span style={{ textAlign: 'center' }}>© 2026 Rafael Sotero</span>
      <span style={{ textAlign: 'right' }}>Uberlândia, BR</span>
    </footer>
  );
}
window.Footer = Footer;
