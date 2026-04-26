function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Social block — LinkedIn highlighted, plus other channels
const SOCIAL_DEFAULT = [{
  key: 'linkedin',
  name: 'LinkedIn',
  handle: '@soterocra',
  href: 'https://www.linkedin.com/in/soterocra',
  color: '#0A66C2',
  highlight: true
}];
function SocialIcon({
  k,
  color
}) {
  const common = {
    width: 22,
    height: 22,
    fill: 'none',
    stroke: color,
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  };
  if (k === 'linkedin') return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, common, {
    style: {
      fill: color,
      stroke: 'none'
    }
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.93 0h4.37v1.91h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v7.45h-4.56v-6.6c0-1.57-.03-3.6-2.19-3.6-2.2 0-2.53 1.71-2.53 3.49V22H8.15V8z"
  }));
  if (k === 'github') return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "22",
    height: "22",
    fill: color
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.16 1.18.92-.26 1.9-.39 2.88-.4.98 0 1.96.13 2.88.39 2.2-1.49 3.16-1.18 3.16-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.56 4.57-1.52 7.85-5.83 7.85-10.91C23.5 5.65 18.35.5 12 .5z"
  }));
  if (k === 'youtube') return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "22",
    height: "22",
    fill: color
  }, /*#__PURE__*/React.createElement("path", {
    d: "M23.5 6.2c-.3-1-1.1-1.8-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6c-1 .3-1.8 1.1-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8c.3 1 1.1 1.8 2.1 2.1 1.9.5 9.4.5 9.4.5s7.5 0 9.4-.6c1-.3 1.8-1.1 2.1-2.1.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.7zM9.6 15.5V8.5l6.4 3.5-6.4 3.5z"
  }));
  if (k === 'email') return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, common), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 6l10 7 10-7"
  }));
  return null;
}
function Social() {
  const t = useT();
  const SOCIAL = [{
    key: 'linkedin',
    name: 'LinkedIn',
    handle: '@soterocra',
    detail: t('social.linkedin.detail'),
    href: 'https://www.linkedin.com/in/soterocra',
    color: '#0A66C2',
    highlight: true
  }, {
    key: 'github',
    name: 'GitHub',
    handle: '@soterocra',
    detail: t('social.github.detail'),
    href: 'https://github.com/soterocra',
    color: 'var(--fg-1)'
  }, {
    key: 'youtube',
    name: 'YouTube',
    handle: '@soterocra',
    detail: t('social.youtube.detail'),
    href: 'https://www.youtube.com/@soterocra',
    color: '#FF0033'
  }, {
    key: 'email',
    name: 'E-mail',
    handle: 'me@soterocra.dev',
    detail: t('social.email.detail'),
    href: 'mailto:me@soterocra.dev',
    color: 'var(--accent)'
  }];
  const featured = SOCIAL.find(s => s.highlight);
  const others = SOCIAL.filter(s => !s.highlight);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      padding: '64px 32px 96px'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    anchor: "contato",
    eyebrow: t('social.eyebrow'),
    title: t('social.title'),
    kicker: t('social.kicker')
  }), /*#__PURE__*/React.createElement("div", {
    className: "social-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: featured.href,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "social-featured",
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 14,
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      textDecoration: 'none',
      color: 'inherit',
      position: 'relative',
      overflow: 'hidden',
      transition: 'border-color .2s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 3,
      background: featured.color
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 10,
      background: `color-mix(in srgb, ${featured.color} 14%, transparent)`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(SocialIcon, {
    k: featured.key,
    color: featured.color
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.1em',
      color: featured.color,
      padding: '4px 8px',
      borderRadius: 4,
      background: `color-mix(in srgb, ${featured.color} 12%, transparent)`
    }
  }, t('social.principal'))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 24,
      margin: '0 0 4px',
      color: 'var(--fg-1)',
      letterSpacing: '-.02em'
    }
  }, featured.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--fg-3)'
    }
  }, featured.handle)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--fg-2)',
      margin: 0,
      maxWidth: 460
    }
  }, featured.detail), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      fontWeight: 600,
      color: featured.color,
      marginTop: 4
    }
  }, t('social.linkedin.cta'), " ", /*#__PURE__*/React.createElement("span", null, "\u2197"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateRows: 'repeat(3, 1fr)',
      gap: 12
    }
  }, others.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.key,
    href: s.href,
    target: s.href.startsWith('http') ? '_blank' : undefined,
    rel: "noopener noreferrer",
    className: "social-row",
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 10,
      padding: '14px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      textDecoration: 'none',
      color: 'inherit',
      transition: 'border-color .2s'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 8,
      background: 'var(--bg-muted)',
      border: '1px solid var(--border)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(SocialIcon, {
    k: s.key,
    color: s.color
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--fg-1)'
    }
  }, s.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--fg-3)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, s.handle)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      color: 'var(--fg-3)'
    }
  }, "\u2197"))))));
}
window.Social = Social;