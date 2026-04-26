// Published articles list — external links to Itaú/DevSuperior/Medium/etc.
const ARTICLES = [
  {
    title: 'Feature Toggles no Itaú: agilidade e governança na implementação de novas features',
    platform: 'Itaú Tech (Medium)',
    platformShort: 'itau',
    date: '2024',
    readMin: 9,
    href: 'https://medium.com/itautech/feature-toggles-no-ita%C3%BA-agilidade-e-governan%C3%A7a-na-implementa%C3%A7%C3%A3o-de-novas-features-d9265c5b0dfe',
    tags: ['Arquitetura', 'Governança'],
  },
  {
    title: 'ChatGPT, Copilot e Claude: como desenvolvedores estão programando em 2026',
    platform: 'DevSuperior',
    platformShort: 'devsuperior',
    date: '2026',
    readMin: 7,
    href: 'https://devsuperior.com.br/blog/chatgpt-copilot-e-claude-como-desenvolvedores-estao-programando-em-2026',
    tags: ['IA', 'Produtividade'],
  },
  {
    title: 'Deploy de aplicações na AWS com ECS Fargate',
    platform: 'DevSuperior',
    platformShort: 'devsuperior',
    date: '2025',
    readMin: 11,
    href: 'https://devsuperior.com.br/blog/deploy-de-aplicacoes-na-aws-com-ecs-fargate',
    tags: ['AWS', 'DevOps'],
  },
  {
    title: 'Desacoplando sistemas com mensageria no AWS SQS',
    platform: 'DevSuperior',
    platformShort: 'devsuperior',
    date: '2025',
    readMin: 8,
    href: 'https://devsuperior.com.br/blog/desacoplando-sistemas-com-mensageria-no-aws-sqs',
    tags: ['AWS', 'Mensageria'],
  },
  {
    title: 'Spring Batch em ação: processamento de grandes lotes de dados',
    platform: 'DevSuperior',
    platformShort: 'devsuperior',
    date: '2024',
    readMin: 10,
    href: 'https://devsuperior.com.br/blog/spring-batch-em-acao-processamento-de-grandes-lotes-de-dados',
    tags: ['Java', 'Spring'],
  },
  {
    title: 'Use Redis para reduzir a latência de APIs REST',
    platform: 'DevSuperior',
    platformShort: 'devsuperior',
    date: '2024',
    readMin: 6,
    href: 'https://devsuperior.com.br/blog/use-redis-para-reduzir-a-latencia-de-apis-rest',
    tags: ['Performance', 'Cache'],
  },
];

const PLATFORM_STYLES = {
  itau:        { bg: '#EC7000', fg: '#fff', label: 'IT' },
  devsuperior: { bg: '#2D65E8', fg: '#fff', label: 'DS' },
  medium:      { bg: '#000',    fg: '#fff', label: 'M' },
};

function PlatformChip({ slug, name }) {
  const s = PLATFORM_STYLES[slug] || { bg: 'var(--fg-3)', fg: '#fff', label: '·' };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      fontFamily: 'var(--font-mono)', fontSize: 11,
      color: 'var(--fg-2)',
    }}>
      <span style={{
        width: 18, height: 18, borderRadius: 4,
        background: s.bg, color: s.fg,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 9, fontWeight: 700, letterSpacing: '0',
      }}>{s.label}</span>
      {name}
    </span>
  );
}

function Articles() {
  const t = useT();
  return (
    <section style={{
      maxWidth: 1100, margin: '0 auto', padding: '64px 32px',
    }}>
      <SectionHead
        anchor="artigos"
        eyebrow={t('articles.eyebrow')}
        title={t('articles.title')}
        kicker={t('articles.kicker')}
        action={
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-3)',
          }}>{ARTICLES.length.toString().padStart(2, '0')} {t('articles.count')}</span>
        }
      />
      <ol style={{
        listStyle: 'none', margin: 0, padding: 0,
        borderTop: '1px solid var(--border)',
      }}>
        {ARTICLES.map((a, i) => (
          <li key={i} style={{ borderBottom: '1px solid var(--border)' }}>
            <a href={a.href} target="_blank" rel="noopener noreferrer"
               className="article-row"
               style={{
                 display: 'grid',
                 gridTemplateColumns: '64px 1fr 220px 80px 28px',
                 alignItems: 'center', gap: 24,
                 padding: '22px 4px',
                 textDecoration: 'none', color: 'inherit',
               }}>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 12,
                color: 'var(--fg-3)', fontVariantNumeric: 'tabular-nums',
              }}>{a.date}</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <h3 style={{
                  fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 17,
                  margin: 0, color: 'var(--fg-1)', letterSpacing: '-.01em',
                  lineHeight: 1.3,
                }}>{a.title}</h3>
                <div style={{ display: 'flex', gap: 6 }}>
                  {a.tags.map(t => (
                    <span key={t} style={{
                      fontFamily: 'var(--font-mono)', fontSize: 10,
                      color: 'var(--fg-3)',
                    }}>#{t.toLowerCase()}</span>
                  ))}
                </div>
              </div>
              <PlatformChip slug={a.platformShort} name={a.platform} />
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-3)',
                textAlign: 'right', fontVariantNumeric: 'tabular-nums',
              }}>{a.readMin} {t('articles.min')}</span>
              <span className="arrow" style={{
                fontFamily: 'var(--font-mono)', color: 'var(--fg-3)',
                fontSize: 16, transition: 'transform .2s, color .2s',
                justifySelf: 'end',
              }}>↗</span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}

window.Articles = Articles;
window.ARTICLES = ARTICLES;
