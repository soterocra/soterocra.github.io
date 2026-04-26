// Contributions — talks, OSS PRs, videos, community posts
const CONTRIBUTIONS = [
  {
    kind: 'video',
    title: 'Extraindo o Poder do WebFlux',
    where: 'YouTube · UaiJUG',
    year: '2024',
    href: 'https://www.youtube.com/watch?v=Go5w9zA8eD4',
    detail: 'Talk · Java reativo',
  },
  {
    kind: 'oss',
    title: 'spring-cloud-function · Issue #1067',
    where: 'GitHub',
    year: '2023',
    href: 'https://github.com/spring-cloud/spring-cloud-function/issues/1067#issuecomment-1694413574',
    detail: 'Investigação · runtime AWS Lambda',
  },
  {
    kind: 'talk',
    title: 'Mensageria com SQS — quando vale o desacoplamento',
    where: 'DevSuperior · Live',
    year: '2025',
    href: '#',
    detail: 'Talk online · 45 min',
  },
  {
    kind: 'post',
    title: 'Discussões sobre serverless e custo em produção',
    where: 'Comunidades · DevSuperior, Itaú Tech',
    year: '2024',
    href: '#',
    detail: 'Posts e respostas técnicas',
  },
];

const KIND_META = {
  video: { label: 'VÍDEO',  color: '#EA8F29' },
  oss:   { label: 'OSS',    color: '#19C258' },
  talk:  { label: 'TALK',   color: '#2D65E8' },
  post:  { label: 'POST',   color: '#F5B800' },
};

function Contributions() {
  const t = useT();
  return (
    <section style={{
      maxWidth: 1100, margin: '0 auto', padding: '64px 32px',
    }}>
      <SectionHead
        anchor="contribuicoes"
        eyebrow={t('contrib.eyebrow')}
        title={t('contrib.title')}
        kicker={t('contrib.kicker')}
      />
      <div className="contrib-grid" style={{
        display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 12,
      }}>
        {CONTRIBUTIONS.map((c, i) => {
          const meta = KIND_META[c.kind];
          return (
            <a key={i} href={c.href}
               target={c.href.startsWith('http') ? '_blank' : undefined}
               rel="noopener noreferrer"
               className="contrib-row"
               style={{
                 display: 'grid',
                 gridTemplateColumns: '64px 1fr auto',
                 alignItems: 'center', gap: 16,
                 padding: '18px 20px',
                 background: 'var(--surface)',
                 border: '1px solid var(--border)', borderRadius: 10,
                 textDecoration: 'none', color: 'inherit',
                 transition: 'border-color .2s',
               }}>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 700,
                letterSpacing: '.1em', color: meta.color,
                padding: '4px 8px', borderRadius: 4,
                background: `color-mix(in srgb, ${meta.color} 12%, transparent)`,
                textAlign: 'center',
              }}>{meta.label}</span>
              <div style={{ minWidth: 0 }}>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 600,
                  color: 'var(--fg-1)', letterSpacing: '-.01em',
                  marginBottom: 4, lineHeight: 1.3,
                }}>{c.title}</div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11,
                  color: 'var(--fg-3)',
                }}>{c.where} · {c.detail}</div>
              </div>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 12,
                fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-3)',
              }}>
                <span>{c.year}</span>
                <span>↗</span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

window.Contributions = Contributions;
