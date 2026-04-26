// Terminal mode — alternative view rendering content as a TUI / boot screen
function Terminal() {
  const lines = [{
    c: 'fg-3',
    t: '# soterocra.dev — last login Apr 25 09:42'
  }, {
    c: 'fg-3',
    t: ''
  }, {
    c: 'green',
    t: '$ whoami'
  }, {
    c: 'fg-1',
    t: 'rafael sotero — software engineer · cloud architect'
  }, {
    c: 'fg-2',
    t: 'staff engineer @ itaú unibanco · aws certified pro · uberlândia, BR'
  }, {
    c: 'fg-3',
    t: ''
  }, {
    c: 'green',
    t: '$ ls ~/articles'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      padding: '32px 32px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#0A0D11',
      border: '1px solid #232934',
      borderRadius: 10,
      overflow: 'hidden',
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      lineHeight: 1.7,
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '10px 14px',
      background: '#14181F',
      borderBottom: '1px solid #232934'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: '50%',
      background: '#FF5F56'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: '50%',
      background: '#FFBD2E'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: '50%',
      background: '#27C93F'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      textAlign: 'center',
      color: '#98A2B3',
      fontSize: 11,
      letterSpacing: '.04em'
    }
  }, "rafael@soterocra ~ \u2014 zsh \u2014 110\xD740")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 22px',
      color: '#E4E7EC'
    }
  }, lines.map((l, i) => /*#__PURE__*/React.createElement(TermLine, {
    key: i,
    className: l.c
  }, l.t)), ARTICLES.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '52px 1fr auto',
      gap: 14,
      padding: '2px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#5B8DF0'
    }
  }, String(i + 1).padStart(2, '0'), "."), /*#__PURE__*/React.createElement("a", {
    href: a.href,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: '#E4E7EC',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#22D866'
    }
  }, "./"), a.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 52), ".md"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#667085'
    }
  }, a.platformShort, " \xB7 ", a.readMin, "m \u2197"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 14
    }
  }), /*#__PURE__*/React.createElement(TermLine, {
    className: "green"
  }, "$ ls ~/projects"), PROJECTS.slice(0, 4).map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '52px 1fr auto',
      gap: 14,
      padding: '2px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#5B8DF0'
    }
  }, String(i + 1).padStart(2, '0'), "."), /*#__PURE__*/React.createElement("a", {
    href: p.href,
    target: p.href.startsWith('http') ? '_blank' : undefined,
    style: {
      color: '#E4E7EC',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#FFAF5B'
    }
  }, "git/"), p.name), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#667085'
    }
  }, p.stack.join(' · ')))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 14
    }
  }), /*#__PURE__*/React.createElement(TermLine, {
    className: "green"
  }, "$ cat ~/contact.txt"), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: 14,
      borderLeft: '2px solid #2D65E8',
      margin: '4px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#E4E7EC'
    }
  }, "linkedin \u2192 ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.linkedin.com/in/rafaelsotero",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: '#5B8DF0',
      textDecoration: 'underline'
    }
  }, "linkedin.com/in/rafaelsotero")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#E4E7EC'
    }
  }, "github   \u2192 ", /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/soterocra",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: '#5B8DF0',
      textDecoration: 'underline'
    }
  }, "github.com/soterocra")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#E4E7EC'
    }
  }, "email    \u2192 ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:me@soterocra.dev",
    style: {
      color: '#5B8DF0',
      textDecoration: 'underline'
    }
  }, "me@soterocra.dev"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      color: '#22D866'
    }
  }, "$ ", /*#__PURE__*/React.createElement("span", {
    className: "cursor-blink",
    style: {
      display: 'inline-block',
      width: 8,
      height: 16,
      background: '#22D866',
      verticalAlign: '-3px',
      marginLeft: 2
    }
  })))));
}
function TermLine({
  className,
  children
}) {
  const colors = {
    'fg-1': '#E4E7EC',
    'fg-2': '#CDD2DA',
    'fg-3': '#667085',
    'green': '#22D866',
    'blue': '#5B8DF0',
    'orange': '#FFAF5B'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      color: colors[className] || '#E4E7EC',
      minHeight: '1.7em'
    }
  }, children);
}
window.Terminal = Terminal;