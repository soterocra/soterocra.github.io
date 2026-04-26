// Footer — minimal
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--border)',
      padding: '24px 32px',
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center',
      gap: 16,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--fg-3)',
      maxWidth: 1100,
      margin: '0 auto',
      width: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--fg-2)',
      letterSpacing: '-.02em'
    }
  }, "soterocra", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, ".dev")), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'center'
    }
  }, "\xA9 2026 Rafael Sotero"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, "Uberl\xE2ndia, BR"));
}
window.Footer = Footer;