// Todo texto do site nas duas línguas. Fonte: LinkedIn do Alberto (nov/2026) e lojas/sites públicos.
// Nunca inventar papel, data ou número. Projeto da 762 nunca aparece pelo nome.
export type Lang = 'en' | 'pt';

export type Case = {
  id: string;
  title: string;
  org: string;
  inspector: { k: string; v: string }[];
  pitch: string;
  sections: { h: string; p?: string; list?: string[] }[];
  results: { value: string; label: string }[];
  highlight?: { value: string; label: string }[];
  media: 'mangut' | 'rabiola' | 'dominoes';
  link?: { href: string; label: string };
};

export type Job = { years: string; role: string; org: string; text: string; tags?: string[]; current?: boolean };

const en = {
  meta: {
    title: 'Alberto Assumpção · Tech Lead, Unity & C#',
    description:
      'Tech lead with 10+ years in Unity and C#. 5 shipped titles and 20M+ players across mobile, PC, console and VR.',
  },
  nav: { work: 'Work', more: 'Experience', contact: 'Contact', cv: 'CV', cvFile: '/cv/Alberto-Assumpcao-CV-en.pdf', switchLabel: 'PT', switchHref: '/pt/' },
  hero: {
    role: 'Tech Lead · Unity & C# · Game Architecture',
    first: 'Alberto',
    last: 'Assumpção',
    lead: 'I build games, and the teams that build them.',
    sub: 'Tech lead with 10+ years in Unity and C#. From a multiplayer dominoes game on Netflix Games to a hand-made physics engine for my own platformer.',
    hint: 'drag the hook',
    stats: [
      { value: '10+', label: 'years in Unity & C#' },
      { value: '20M+', label: 'players reached' },
      { value: '5', label: 'shipped titles' },
    ],
    shippedAt: 'Worked at',
    platforms: 'Shipped on',
  },
  workTitle: 'Selected work',
  cases: [
    {
      id: 'mangut',
      title: 'Mangut',
      org: 'Pink Mango · my studio',
      inspector: [
        { k: 'Role', v: 'Founder · director · lead programmer' },
        { k: 'Engine', v: 'Unity 2D · C#' },
        { k: 'Middleware', v: 'FMOD · Rewired · Steamworks' },
        { k: 'Platforms', v: 'Steam · Xbox (2027)' },
      ],
      pitch: 'A hand-painted precision platformer about an app delivery rider racing to pay the bills.',
      sections: [
        {
          h: 'Problem',
          p: 'A grappling-hook platformer lives or dies on feel. Rigidbody physics could not give frame-exact control, and every tuning pass risked breaking the swing.',
        },
        {
          h: 'What I built',
          list: [
            'Fully custom kinematic movement, no Rigidbody2D. Coyote time, jump buffer, apex hang and corner correction, tuned against Celeste in screen-widths per second.',
            'The rope as a pure solver (pendulum step, rope-length rules, contact resolution) behind 57 EditMode tests, so feel can be retuned without regressions.',
            'Speedrun stack: millisecond timer, instant restart, versioned Steam leaderboards with a sanity floor against bad uploads.',
            'One-click Build & Ship editor tool: local build plus steamcmd upload to the right Steam app and branch.',
          ],
        },
      ],
      results: [
        { value: '41 min', label: 'average demo session' },
        { value: 'Top 10', label: 'Embratur “Brasil Tá Pra Game” award' },
        { value: 'ID@Xbox', label: 'publishing contracts signed' },
      ],
      media: 'mangut',
      link: { href: 'https://store.steampowered.com/app/3195840/', label: 'Steam page' },
    },
    {
      id: 'dominoes',
      title: 'Dominoes',
      org: 'Gazeus Games',
      inspector: [
        { k: 'Role', v: 'Unity C# developer' },
        { k: 'Games', v: 'Dominoes Jogatina · Dominoes Battle' },
        { k: 'Platforms', v: 'Android · iOS · Facebook Gaming · Netflix Games' },
        { k: 'Model', v: 'Free to play · live ops' },
      ],
      pitch: 'Online multiplayer dominoes from one of Brazil’s biggest casual studios. I worked on it twice.',
      sections: [
        {
          h: '2019 · Dominoes Jogatina',
          p: 'Ported the studio’s original dominoes game from native to Unity: the one with 20M+ downloads, 10M+ on Google Play alone. Better performance and a codebase the team could keep growing.',
        },
        {
          h: '2021–22 · Dominoes Battle',
          list: [
            'Core gameplay features for a competitive game with 2 or 4 players, four rule sets, online matches and reconnection.',
            'Live-ops updates: leagues, rankings, events, daily missions, chat and a soft-currency economy.',
            'Platform integrations for Google Play, App Store, Facebook Gaming and Netflix Games, keeping it stable for millions of active players.',
          ],
        },
      ],
      results: [
        { value: '4', label: 'storefronts, from Google Play to Netflix' },
        { value: '7', label: 'languages' },
        { value: '2×', label: 'times on the franchise' },
      ],
      highlight: [
        { value: '20M+', label: 'downloads on Android & iOS · Dominoes Jogatina' },
        { value: 'Netflix', label: 'Games · Dominoes Battle' },
        { value: '4.7★', label: 'App Store · Dominoes Battle' },
      ],
      media: 'dominoes',
      link: { href: 'https://apps.apple.com/app/id1521913067', label: 'App Store' },
    },
    {
      id: 'rabiola',
      title: 'Rabiola',
      org: 'Okoto Studio · Black Public Media',
      inspector: [
        { k: 'Role', v: 'Unity C# developer · architect of the VR version' },
        { k: 'Engine', v: 'Unity · C#' },
        { k: 'Network', v: 'Node.js · WebSocket · Heroku' },
        { k: 'Platforms', v: 'Meta Quest · projection + phones' },
      ],
      pitch:
        'Two ways to fly a kite over Rio: in VR, from a favela rooftop, and on the street, in a sky projected on a building with your phone as the controller.',
      sections: [
        {
          h: 'Rabiola Tales · VR',
          p: 'I developed and architected this VR kite simulator for Meta Quest. The hard part: reproduce the real feeling of flying a kite, smooth and responsive, for people who grew up doing it on rooftops.',
          list: [
            'The kite flight model: custom physics for wind, lift, drag and line tension, tuned until it behaves like a real rooftop kite.',
            'Line control with tracked hands, inside a playful 3D world with a kite-shop owner telling stories about the neighborhood.',
          ],
        },
        {
          h: 'Rabiola Céu Aberto · projection',
          p: 'The street spin-off: anyone walking by opens a page, gets a kite and flies it with up to 25 strangers. A live show has no second take.',
          list: [
            'Three pieces, one socket: Unity projection client, Node.js WebSocket relay and a web controller. Nothing to install.',
            'Each phone gets a letter that is its kite. Swipes go up as commands, catches come back as a personal score.',
            'Live-event hardening: protocol-level heartbeat under the host 55 s idle cutoff, kite resume after a drop (no ghost kites), clean reset between matches.',
          ],
        },
      ],
      results: [
        { value: '26', label: 'players flying at once' },
        { value: '0', label: 'apps to install' },
        { value: 'US$25K', label: '2nd place, Pitch Black 2022' },
      ],
      media: 'rabiola',
      link: { href: 'https://rabiolaopen.com', label: 'Project site' },
    },
  ] as Case[],
  moreTitle: 'Experience',
  jobs: [
    { years: '2025 — now', role: 'Technical Lead', org: '762 Interactive', current: true,
      text: 'Lead the technical direction of a strategy game in development: architecture, engineering standards, and the bridge between design, production and code. Still hands-on in Unity.', tags: ['Unity 6', 'Architecture', 'Team lead'] },
    { years: '2022 — 2025', role: 'Founder, developer & director', org: 'Pink Mango',
      text: 'Took Mangut from zero to Steam: every core system in Unity, plus roadmap, creative direction and fundraising.', tags: ['Steam', 'Xbox', 'Production'] },
    { years: '2023', role: 'Unity C# developer', org: 'Metaversando',
      text: 'Architected a multiplayer, cross-platform communication platform with voice chat, screen sharing and custom avatars, bridging Web and Meta Quest 2.', tags: ['Multiplayer', 'VR', 'Web'] },
    { years: '2020 — 2023', role: 'Unity C# developer', org: 'Okoto Studio',
      text: 'Developed and architected Rabiola Tales (VR kite simulator for Meta Quest), built the projection client and real-time server of Rabiola Céu Aberto, and made 360° installations for exhibitions such as Às Margens do Rio Ipiranga.', tags: ['VR', 'Networking', 'Installations'] },
    { years: '2019 · 2021 — 22', role: 'Unity C# developer', org: 'Gazeus Games',
      text: 'Ported Dominoes Jogatina from native to Unity (20M+ downloads), then built gameplay, live ops and platform integrations for Dominoes Battle, up to Netflix Games.', tags: ['Mobile', 'Multiplayer', 'Live ops'] },
    { years: '2019 — 2021', role: 'Game creator & developer', org: 'Pink Mango',
      text: 'Created and shipped Rango, a casual mobile game on Google Play, with its own level editor for fast iteration.', tags: ['Mobile', 'Tools'] },
    { years: '2019 — 2020', role: 'Unity developer', org: 'Rebuliço',
      text: 'NaÀra, a 2D stealth platformer set in key moments of Brazilian history: core gameplay, level design tools and the AI behind the stealth.', tags: ['AI', 'Tools'] },
    { years: '2016 — 2018', role: 'Unity developer', org: 'YDreams · Arcolabs · Smash Mountain',
      text: 'Barretos Cancer Hospital’s Genesis Mission and the NBA Fan Zone at Rock in Rio; an event-driven adventure-game framework, shipped with the MC Gui game; and the gameplay, retention and monetization of BeJJ, a competitive jiu-jitsu game.' },
    { years: '2011 — 2015', role: 'Co-founder & technical lead', org: 'Clickaê',
      text: 'Co-founded a coupon startup and grew from coding the site to leading a team of up to five engineers, shipping three site versions and the back-office behind them. After Fnbox acquired it, stayed on as product manager.', tags: ['Team lead', 'Acquired'] },
  ] as Job[],
  education: 'Digital Games at Estácio · Computer Science at UFRJ · VR bootcamp at the Laboratório de Atividades do Amanhã',
  contact: {
    title: 'Contact',
    location: 'Rio de Janeiro, Brazil',
    languages: 'Portuguese · English · Spanish',
  },
  footer: 'Built with Astro.',
};

const pt: typeof en = {
  meta: {
    title: 'Alberto Assumpção · Tech Lead, Unity e C#',
    description:
      'Tech lead com mais de 10 anos de Unity e C#. 5 títulos lançados e mais de 20 milhões de jogadores em mobile, PC, console e VR.',
  },
  nav: { work: 'Projetos', more: 'Experiência', contact: 'Contato', cv: 'Currículo', cvFile: '/cv/Alberto-Assumpcao-CV-pt.pdf', switchLabel: 'EN', switchHref: '/' },
  hero: {
    role: 'Tech Lead · Unity e C# · Arquitetura de jogos',
    first: 'Alberto',
    last: 'Assumpção',
    lead: 'Eu faço jogos, e os times que fazem jogos.',
    sub: 'Tech lead com mais de 10 anos de Unity e C#. De um dominó multiplayer na Netflix Games a um motor de física feito à mão pro meu próprio platformer.',
    hint: 'arraste o gancho',
    stats: [
      { value: '10+', label: 'anos de Unity e C#' },
      { value: '20M+', label: 'jogadores alcançados' },
      { value: '5', label: 'títulos lançados' },
    ],
    shippedAt: 'Trabalhei em',
    platforms: 'Lancei em',
  },
  workTitle: 'Projetos',
  cases: [
    {
      id: 'mangut',
      title: 'Mangut',
      org: 'Pink Mango · meu estúdio',
      inspector: [
        { k: 'Papel', v: 'Fundador · diretor · programador líder' },
        { k: 'Engine', v: 'Unity 2D · C#' },
        { k: 'Middleware', v: 'FMOD · Rewired · Steamworks' },
        { k: 'Plataformas', v: 'Steam · Xbox (2027)' },
      ],
      pitch: 'Precision platformer pintado à mão sobre um entregador de app correndo pra pagar as contas.',
      sections: [
        {
          h: 'Problema',
          p: 'Platformer de gancho vive ou morre pelo feel. Física de Rigidbody não dava controle exato por frame, e cada ajuste arriscava quebrar o balanço.',
        },
        {
          h: 'O que eu construí',
          list: [
            'Movimento cinemático 100% custom, sem Rigidbody2D. Coyote time, jump buffer, apex hang e corner correction calibrados contra Celeste em larguras de tela por segundo.',
            'A corda como solver puro (passo do pêndulo, regras de comprimento, resolução de contato) atrás de 57 testes EditMode, pra retunar o feel sem regressão.',
            'Stack de speedrun: timer em milissegundos, restart instantâneo, leaderboards da Steam versionados com piso contra upload absurdo.',
            'Ferramenta de editor Build & Ship em um clique: build local e upload por steamcmd pro app e branch certos da Steam.',
          ],
        },
      ],
      results: [
        { value: '41 min', label: 'sessão média na demo' },
        { value: 'Top 10', label: 'prêmio “Brasil Tá Pra Game” da Embratur' },
        { value: 'ID@Xbox', label: 'contratos de publicação assinados' },
      ],
      media: 'mangut',
      link: { href: 'https://store.steampowered.com/app/3195840/', label: 'Página na Steam' },
    },
    {
      id: 'dominoes',
      title: 'Dominoes',
      org: 'Gazeus Games',
      inspector: [
        { k: 'Papel', v: 'Dev Unity C#' },
        { k: 'Jogos', v: 'Dominoes Jogatina · Dominoes Battle' },
        { k: 'Plataformas', v: 'Android · iOS · Facebook Gaming · Netflix Games' },
        { k: 'Modelo', v: 'Free to play · live ops' },
      ],
      pitch: 'Dominó multiplayer online de um dos maiores estúdios casuais do Brasil. Trabalhei nele duas vezes.',
      sections: [
        {
          h: '2019 · Dominoes Jogatina',
          p: 'Portei de nativo pra Unity o dominó original do estúdio: o que tem mais de 20 milhões de downloads, 10 milhões só no Google Play. Mais performance e um código que o time conseguia continuar crescendo.',
        },
        {
          h: '2021–22 · Dominoes Battle',
          list: [
            'Features centrais de gameplay num jogo competitivo de 2 ou 4 jogadores, quatro regras, partida online e reconexão.',
            'Atualizações de live ops: ligas, ranking, eventos, missões diárias, chat e economia de moeda virtual.',
            'Integrações com Google Play, App Store, Facebook Gaming e Netflix Games, mantendo estável pra milhões de jogadores ativos.',
          ],
        },
      ],
      results: [
        { value: '4', label: 'lojas, do Google Play à Netflix' },
        { value: '7', label: 'idiomas' },
        { value: '2×', label: 'passagens pela franquia' },
      ],
      highlight: [
        { value: '20 mi+', label: 'downloads no Android e iOS · Dominoes Jogatina' },
        { value: 'Netflix', label: 'Games · Dominoes Battle' },
        { value: '4,7★', label: 'App Store · Dominoes Battle' },
      ],
      media: 'dominoes',
      link: { href: 'https://apps.apple.com/app/id1521913067', label: 'App Store' },
    },
    {
      id: 'rabiola',
      title: 'Rabiola',
      org: 'Okoto Studio · Black Public Media',
      inspector: [
        { k: 'Papel', v: 'Dev Unity C# · arquiteto da versão VR' },
        { k: 'Engine', v: 'Unity · C#' },
        { k: 'Rede', v: 'Node.js · WebSocket · Heroku' },
        { k: 'Plataformas', v: 'Meta Quest · projeção + celulares' },
      ],
      pitch:
        'Dois jeitos de empinar pipa no Rio: em VR, de cima de uma laje na favela, e na rua, num céu projetado num prédio com o celular de controle.',
      sections: [
        {
          h: 'Rabiola Tales · VR',
          p: 'Desenvolvi e arquitetei esse simulador de pipa em VR pro Meta Quest. O difícil: reproduzir a sensação real de empinar pipa, suave e responsiva, pra quem cresceu fazendo isso na laje.',
          list: [
            'O modelo de voo da pipa: física custom de vento, sustentação, arrasto e tensão da linha, ajustada até se comportar como pipa de laje de verdade.',
            'Controle da linha com as mãos rastreadas, num mundo 3D lúdico com o dono da loja de pipa contando histórias do bairro.',
          ],
        },
        {
          h: 'Rabiola Céu Aberto · projeção',
          p: 'O spin-off pra rua: quem passa abre uma página, ganha uma pipa e empina com até 25 desconhecidos. Show ao vivo não tem segunda chance.',
          list: [
            'Três peças, um socket: cliente Unity da projeção, relay WebSocket em Node.js e controle web. Nada pra instalar.',
            'Cada celular ganha uma letra, que é a pipa dele. Swipe sobe como comando, pipa coletada volta como placar pessoal.',
            'Blindagem de evento ao vivo: heartbeat no protocolo abaixo do corte de 55 s do host, retomada da pipa depois de queda (sem pipa fantasma), reset limpo entre partidas.',
          ],
        },
      ],
      results: [
        { value: '26', label: 'jogadores ao mesmo tempo' },
        { value: '0', label: 'apps pra instalar' },
        { value: 'US$25 mil', label: '2º lugar, Pitch Black 2022' },
      ],
      media: 'rabiola',
      link: { href: 'https://rabiolaopen.com', label: 'Site do projeto' },
    },
  ],
  moreTitle: 'Experiência',
  jobs: [
    { years: '2025 — hoje', role: 'Technical Lead', org: '762 Interactive', current: true,
      text: 'Lidero a direção técnica de um jogo de estratégia em desenvolvimento: arquitetura, padrões de engenharia e a ponte entre design, produção e código. Sigo com a mão no Unity.', tags: ['Unity 6', 'Arquitetura', 'Liderança'] },
    { years: '2022 — 2025', role: 'Fundador, dev e diretor', org: 'Pink Mango',
      text: 'Levei o Mangut do zero à Steam: todos os sistemas centrais em Unity, mais roadmap, direção criativa e captação.', tags: ['Steam', 'Xbox', 'Produção'] },
    { years: '2023', role: 'Dev Unity C#', org: 'Metaversando',
      text: 'Arquitetei uma plataforma de comunicação multiplayer e multiplataforma com chat de voz, compartilhamento de tela e avatares, ligando Web e Meta Quest 2.', tags: ['Multiplayer', 'VR', 'Web'] },
    { years: '2020 — 2023', role: 'Dev Unity C#', org: 'Okoto Studio',
      text: 'Desenvolvi e arquitetei o Rabiola Tales (simulador de pipa em VR pro Meta Quest), fiz o cliente da projeção e o servidor em tempo real do Rabiola Céu Aberto, e experiências 360° pra exposições como Às Margens do Rio Ipiranga.', tags: ['VR', 'Rede', 'Instalações'] },
    { years: '2019 · 2021 — 22', role: 'Dev Unity C#', org: 'Gazeus Games',
      text: 'Portei o Dominoes Jogatina de nativo pra Unity (20 mi+ de downloads), depois gameplay, live ops e integrações de plataforma do Dominoes Battle, até a Netflix Games.', tags: ['Mobile', 'Multiplayer', 'Live ops'] },
    { years: '2019 — 2021', role: 'Criador e dev', org: 'Pink Mango',
      text: 'Criei e lancei o Rango, jogo casual mobile no Google Play, com editor de fases próprio pra iterar rápido.', tags: ['Mobile', 'Ferramentas'] },
    { years: '2019 — 2020', role: 'Dev Unity', org: 'Rebuliço',
      text: 'NaÀra, platformer 2D de stealth em momentos marcantes da história do Brasil: gameplay central, ferramentas de level design e a IA por trás do stealth.', tags: ['IA', 'Ferramentas'] },
    { years: '2016 — 2018', role: 'Dev Unity', org: 'YDreams · Arcolabs · Smash Mountain',
      text: 'Missão Gênesis do Hospital de Amor de Barretos e a NBA Fan Zone no Rock in Rio; um framework orientado a eventos pra jogos de aventura, lançado junto com o jogo do MC Gui; e gameplay, retenção e monetização do BeJJ, jogo competitivo de jiu-jitsu.' },
    { years: '2011 — 2015', role: 'Co-fundador e tech lead', org: 'Clickaê',
      text: 'Co-fundei uma startup de cupons e passei de programar o site a liderar um time de até cinco devs, entregando três versões do site e o back-office por trás. Depois que a Fnbox comprou, fiquei como product manager.', tags: ['Liderança', 'Adquirida'] },
  ],
  education: 'Jogos Digitais na Estácio · Ciência da Computação na UFRJ · Bootcamp de VR no Laboratório de Atividades do Amanhã',
  contact: {
    title: 'Contato',
    location: 'Rio de Janeiro, Brasil',
    languages: 'Português · Inglês · Espanhol',
  },
  footer: 'Feito com Astro.',
};

export const content = { en, pt };
