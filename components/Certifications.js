// Certifications — AWS-focused
const CERTS = [{
  title: 'AWS Certified Solutions Architect — Professional',
  issuer: 'Amazon Web Services',
  year: '2024',
  level: 'Professional',
  color: '#EA8F29',
  code: 'SAP-C02'
}, {
  title: 'AWS Certified Solutions Architect — Associate',
  issuer: 'Amazon Web Services',
  year: '2022',
  level: 'Associate',
  color: '#2D65E8',
  code: 'SAA-C03'
}];
function Certifications() {
  const t = useT();
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      padding: '32px 32px 64px'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    anchor: "certificacoes",
    eyebrow: t('certs.eyebrow'),
    title: t('certs.title'),
    kicker: t('certs.kicker')
  }), /*#__PURE__*/React.createElement("div", {
    className: "certs-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 16
    }
  }, CERTS.map((c, i) => /*#__PURE__*/React.createElement("article", {
    key: i,
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 12,
      padding: '22px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      width: 3,
      background: c.color
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 10,
      background: `color-mix(in srgb, ${c.color} 14%, transparent)`,
      border: `1px solid color-mix(in srgb, ${c.color} 40%, transparent)`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 11,
      color: c.color,
      letterSpacing: '.04em'
    }
  }, "AWS"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: c.color,
      marginBottom: 4
    }
  }, c.level, " \xB7 ", c.code), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: 15,
      margin: '0 0 4px',
      color: 'var(--fg-1)',
      letterSpacing: '-.01em',
      lineHeight: 1.3
    }
  }, c.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--fg-3)'
    }
  }, c.issuer, " \xB7 ", c.year))))));
}
window.Certifications = Certifications;