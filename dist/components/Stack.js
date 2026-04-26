// Stack — small section with grouped tech
const STACK_KEYS = [{
  key: 'langs',
  items: ['Java', 'Go', 'Python', 'TypeScript']
}, {
  key: 'cloud',
  items: ['AWS', 'Step Functions', 'Lambda', 'ECS Fargate', 'DynamoDB']
}, {
  key: 'backend',
  items: ['Spring Boot', 'Spring Batch', 'Quarkus', 'Redis']
}, {
  key: 'platform',
  items: ['Terraform', 'EKS', 'GitHub Actions', 'Docker', 'Prometheus']
}];
function Stack() {
  const t = useT();
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      padding: '32px 32px 64px'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: t('stack.eyebrow'),
    title: t('stack.title'),
    kicker: t('stack.kicker')
  }), /*#__PURE__*/React.createElement("div", {
    className: "stack-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24
    }
  }, STACK_KEYS.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.key
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--fg-3)',
      marginBottom: 12,
      paddingBottom: 8,
      borderBottom: '1px solid var(--border)'
    }
  }, t('stack.' + s.key)), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, s.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--fg-2)',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 4,
      borderRadius: '50%',
      background: 'var(--accent)',
      flexShrink: 0
    }
  }), it)))))));
}
window.Stack = Stack;