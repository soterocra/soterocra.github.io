// i18n — language toggle. Articles/projects/contributions kept in original language.
const I18N = {
  pt: {
    // Nav
    'nav.sobre': 'Sobre',
    'nav.artigos': 'Artigos',
    'nav.projetos': 'Projetos',
    'nav.contribuicoes': 'Contribuições',
    'nav.contato': 'Contato',
    'nav.terminal': 'terminal',

    // Hero
    'hero.available': 'Disponível para conversas',
    'hero.bio': 'Staff Engineer no Itaú Unibanco. AWS Certified Professional, com 12 anos construindo sistemas em **Java**, **Go** e **Python**. Escrevo sobre AWS, arquitetura, IA, Código e o que aprendo durante a jornada.',
    'hero.joke': 'developer e arquiteto experiente, vibe coder nas horas vagas.',
    'hero.based': 'Baseado em',
    'hero.focus': 'Foco',
    'hero.langs': 'Idiomas',
    'hero.now': 'NOW',
    'hero.now.value': 'Itaú Unibanco · Staff Engineer',

    // Sections
    'articles.eyebrow': 'Notas publicadas',
    'articles.title': 'Artigos',
    'articles.kicker': 'Publicados em DevSuperior, Itaú Tech e outros canais. Os links abrem no veículo original.',
    'articles.count': 'artigos',
    'articles.min': 'min',

    'projects.eyebrow': 'Repos & contribuições',
    'projects.title': 'Projetos',
    'projects.kicker': 'Pequenos pacotes que mantenho, somados a contribuições em projetos maiores.',
    'projects.contrib': 'Contribuição',
    'projects.article': 'Artigo',

    'contrib.eyebrow': 'Comunidade',
    'contrib.title': 'Contribuições',
    'contrib.kicker': 'Talks, vídeos, pull requests e discussões em projetos open source.',

    'stack.eyebrow': 'Toolbelt',
    'stack.title': 'Stack',
    'stack.kicker': 'O que uso no dia a dia.',
    'stack.langs': 'Linguagens',
    'stack.cloud': 'Cloud',
    'stack.backend': 'Backend',
    'stack.platform': 'Plataforma',

    'certs.eyebrow': 'Credenciais',
    'certs.title': 'Certificações',
    'certs.kicker': 'Validações oficiais de conhecimento em arquitetura AWS.',

    'social.eyebrow': 'Vamos conversar',
    'social.title': 'Contato',
    'social.kicker': 'O melhor canal para um primeiro contato é o LinkedIn.',
    'social.principal': 'PRINCIPAL',
    'social.linkedin.detail': 'Onde respondo mais rápido. Vagas, conversas técnicas, parcerias.',
    'social.linkedin.cta': 'Conectar no LinkedIn',
    'social.github.detail': 'Código aberto e contribuições.',
    'social.youtube.detail': 'Vídeos sobre AWS e arquitetura.',
    'social.email.detail': 'Para tópicos longos ou mais formais.',
  },
  en: {
    'nav.sobre': 'About',
    'nav.artigos': 'Articles',
    'nav.projetos': 'Projects',
    'nav.contribuicoes': 'Contributions',
    'nav.contato': 'Contact',
    'nav.terminal': 'terminal',

    'hero.available': 'Open to conversations',
    'hero.bio': 'Staff Engineer at Itaú Unibanco. AWS Certified Professional, with 12 years building systems in **Java**, **Go** and **Python**. I write about AWS, architecture, AI, Code, and what I learn along the journey.',
    'hero.joke': 'experienced developer and architect, vibe coder in my spare time.',
    'hero.based': 'Based in',
    'hero.focus': 'Focus',
    'hero.langs': 'Languages',
    'hero.now': 'NOW',
    'hero.now.value': 'Itaú Unibanco · Staff Engineer',

    'articles.eyebrow': 'Published notes',
    'articles.title': 'Articles',
    'articles.kicker': 'Published on DevSuperior, Itaú Tech and other channels. Links open at the original outlet.',
    'articles.count': 'articles',
    'articles.min': 'min',

    'projects.eyebrow': 'Repos & contributions',
    'projects.title': 'Projects',
    'projects.kicker': 'Small packages I maintain, plus contributions to larger projects.',
    'projects.contrib': 'Contribution',
    'projects.article': 'Article',

    'contrib.eyebrow': 'Community',
    'contrib.title': 'Contributions',
    'contrib.kicker': 'Talks, videos, pull requests and discussions in open source projects.',

    'stack.eyebrow': 'Toolbelt',
    'stack.title': 'Stack',
    'stack.kicker': 'What I use day to day.',
    'stack.langs': 'Languages',
    'stack.cloud': 'Cloud',
    'stack.backend': 'Backend',
    'stack.platform': 'Platform',

    'certs.eyebrow': 'Credentials',
    'certs.title': 'Certifications',
    'certs.kicker': 'Official validation of AWS architecture knowledge.',

    'social.eyebrow': "Let's talk",
    'social.title': 'Contact',
    'social.kicker': 'The best channel for a first contact is LinkedIn.',
    'social.principal': 'PRIMARY',
    'social.linkedin.detail': 'Where I reply fastest. Jobs, technical chats, partnerships.',
    'social.linkedin.cta': 'Connect on LinkedIn',
    'social.github.detail': 'Open source and contributions.',
    'social.youtube.detail': 'Videos about AWS and architecture.',
    'social.email.detail': 'For longer or more formal topics.',
  },
};

const LangContext = React.createContext('pt');

function useT() {
  const lang = React.useContext(LangContext);
  return (key) => I18N[lang]?.[key] ?? I18N.pt[key] ?? key;
}

// Render bold-marked **text** as <strong>
function renderBio(str) {
  const parts = str.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith('**') && p.endsWith('**')) {
      return <strong key={i} style={{ color: 'var(--fg-1)' }}>{p.slice(2, -2)}</strong>;
    }
    return <React.Fragment key={i}>{p}</React.Fragment>;
  });
}

window.LangContext = LangContext;
window.useT = useT;
window.renderBio = renderBio;
