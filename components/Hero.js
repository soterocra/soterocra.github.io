// Hero — sober senior-engineer portfolio
function Hero() {
  const t = useT();
  return /*#__PURE__*/React.createElement("section", {
    id: "sobre",
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      padding: '88px 32px 64px',
      display: 'grid',
      gridTemplateColumns: '1.35fr .8fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--fg-3)',
      letterSpacing: '.08em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: '#19C258',
      boxShadow: '0 0 0 4px rgba(25,194,88,.18)'
    }
  }), t('hero.available'))), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 56,
      lineHeight: 1.04,
      letterSpacing: '-.025em',
      margin: 0,
      color: 'var(--fg-1)'
    }
  }, "Rafael Sotero", /*#__PURE__*/React.createElement("span", {
    className: "cursor-blink",
    style: {
      display: 'inline-block',
      width: '.5em',
      height: '.9em',
      marginLeft: 6,
      background: 'var(--accent)',
      verticalAlign: '-.05em'
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--fg-2)',
      margin: 0,
      maxWidth: 580
    }
  }, renderBio(t('hero.bio'))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      lineHeight: 1.55,
      color: 'var(--fg-3)',
      margin: 0,
      maxWidth: 580,
      fontStyle: 'italic'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'normal'
    }
  }, "\uD83E\uDD84"), " \xA0", t('hero.joke')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      flexWrap: 'wrap',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(FactPill, {
    label: t('hero.based'),
    value: "Uberl\xE2ndia, BR"
  }), /*#__PURE__*/React.createElement(FactPill, {
    label: t('hero.focus'),
    value: "AWS \xB7 Java \xB7 IA"
  }), /*#__PURE__*/React.createElement(FactPill, {
    label: t('hero.langs'),
    value: "PT \xB7 EN"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      justifySelf: 'end'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/photo-author.png",
    alt: "Rafael Sotero",
    style: {
      width: 320,
      height: 400,
      objectFit: 'cover',
      borderRadius: 16,
      border: '1px solid var(--border)',
      boxShadow: 'var(--shadow-md)',
      filter: 'saturate(.98)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -14,
      left: -14,
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 10,
      padding: '10px 14px',
      boxShadow: 'var(--shadow-sm)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: '#19C258'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-3)',
      letterSpacing: '.08em',
      textTransform: 'uppercase'
    }
  }, t('hero.now')), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-1)',
      fontWeight: 600
    }
  }, t('hero.now.value')))));
}
function FactPill({
  label,
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-3)',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      fontSize: 10,
      fontWeight: 600
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-1)',
      fontWeight: 600
    }
  }, value));
}
window.Hero = Hero;