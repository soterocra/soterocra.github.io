// Section header — eyebrow + title, used across sections
function SectionHead({
  eyebrow,
  title,
  kicker,
  anchor,
  action
}) {
  return /*#__PURE__*/React.createElement("header", {
    id: anchor,
    className: "section-head",
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 24,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--fg-3)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 1,
      background: 'var(--fg-3)',
      display: 'inline-block'
    }
  }), eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 32,
      lineHeight: 1.1,
      letterSpacing: '-.02em',
      margin: 0,
      color: 'var(--fg-1)'
    }
  }, title), kicker && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 15,
      lineHeight: 1.55,
      color: 'var(--fg-3)',
      margin: '4px 0 0',
      maxWidth: 600
    }
  }, kicker)), action && /*#__PURE__*/React.createElement("div", null, action));
}
window.SectionHead = SectionHead;