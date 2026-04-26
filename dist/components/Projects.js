// Projects grid — open source / personal projects
const PROJECTS = [{
  name: 'spring-batch-em-acao',
  desc: 'Código de apoio ao artigo — pipeline Spring Batch processando grandes lotes com chunking, restart e métricas.',
  stack: ['Java', 'Spring Batch'],
  href: 'https://github.com/devsuperior/blog/blob/main/articles/spring-batch-em-acao',
  stars: null,
  badge: 'Artigo',
  glyph: 'sb'
}, {
  name: 'devs-em-2026-com-ia',
  desc: 'Repositório do artigo sobre ChatGPT, Copilot e Claude — fluxos práticos de programação assistida por IA.',
  stack: ['IA', 'Produtividade'],
  href: 'https://github.com/devsuperior/blog/blob/main/articles/chatgpt-copilot-e-claude-como-desenvolvedores-est-o-programando-em-2026',
  stars: null,
  badge: 'Artigo',
  glyph: 'ai'
}, {
  name: 'redis-latencia-apis-rest',
  desc: 'Exemplos de cache com Redis para reduzir latência em APIs REST — padrões de invalidação e medições reais.',
  stack: ['Java', 'Redis', 'Performance'],
  href: 'https://github.com/devsuperior/blog/blob/main/articles/use-redis-para-reduzir-a-lat-ncia-de-apis-rest',
  stars: null,
  badge: 'Artigo',
  glyph: 'rd'
}, {
  name: 'deploy-aws-ecs-fargate',
  desc: 'Walkthrough de deploy em ECS Fargate — VPC, ALB, autoscaling e CI/CD no GitHub Actions.',
  stack: ['AWS', 'ECS', 'IaC'],
  href: 'https://github.com/devsuperior/blog/blob/main/articles/deploy-de-aplicacoes-na-aws-com-ecs-fargate',
  stars: null,
  badge: 'Artigo',
  glyph: 'fg'
}, {
  name: 'mensageria-aws-sqs',
  desc: 'Desacoplando sistemas com SQS — produtores, consumidores, DLQs e padrões de retry exponencial.',
  stack: ['AWS', 'SQS', 'Mensageria'],
  href: 'https://github.com/devsuperior/blog/blob/main/articles/desacoplando-sistemas-com-mensageria-no-aws-sqs',
  stars: null,
  badge: 'Artigo',
  glyph: 'sq'
}, {
  name: 'spring-cloud-function',
  desc: 'Contribuição upstream — investigação de comportamento em runtime AWS Lambda combinado com webflux.',
  stack: ['Java', 'Spring', 'OSS'],
  href: 'https://github.com/spring-cloud/spring-cloud-function/issues/1067#issuecomment-1694413574',
  stars: null,
  badge: 'Contribuição',
  glyph: 'sc'
}];
function Glyph({
  code
}) {
  // Two-letter mono badge — replaces stock logos
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 8,
      background: 'var(--bg-muted)',
      border: '1px solid var(--border)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--fg-2)',
      letterSpacing: '-.02em',
      flexShrink: 0
    }
  }, code);
}
function Projects() {
  const t = useT();
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      padding: '64px 32px'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    anchor: "projetos",
    eyebrow: t('projects.eyebrow'),
    title: t('projects.title'),
    kicker: t('projects.kicker'),
    action: /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        color: 'var(--accent)',
        textDecoration: 'none'
      }
    }, "github.com/sotero \u2197")
  }), /*#__PURE__*/React.createElement("div", {
    className: "project-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16
    }
  }, PROJECTS.map((p, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: p.href,
    target: p.href.startsWith('http') ? '_blank' : undefined,
    rel: "noopener noreferrer",
    className: "project-card",
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 12,
      padding: 22,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      textDecoration: 'none',
      color: 'inherit',
      position: 'relative',
      transition: 'border-color .2s, transform .2s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Glyph, {
    code: p.glyph
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--fg-1)',
      letterSpacing: '-.01em',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--fg-3)',
      marginTop: 2,
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, p.badge ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)',
      fontWeight: 600
    }
  }, p.badge === 'Contribuição' ? t('projects.contrib') : t('projects.article')) : /*#__PURE__*/React.createElement("span", null, "\u2605 ", p.stars))), /*#__PURE__*/React.createElement("span", {
    className: "proj-arrow",
    style: {
      color: 'var(--fg-3)',
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      transition: 'color .2s, transform .2s'
    }
  }, "\u2197")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      lineHeight: 1.55,
      color: 'var(--fg-2)',
      margin: 0,
      flex: 1
    }
  }, p.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, p.stack.map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      fontWeight: 500,
      padding: '3px 7px',
      borderRadius: 4,
      background: 'var(--bg-muted)',
      color: 'var(--fg-2)',
      border: '1px solid var(--border)'
    }
  }, s)))))));
}
window.Projects = Projects;