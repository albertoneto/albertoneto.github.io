// Todo texto do site nas duas línguas. Nunca inventar papel, data ou número do Alberto:
// o que não veio dele fica fora. Números de produto (loja) só de fonte pública.
export type Lang = 'en' | 'pt';

export type Case = {
  id: string;
  title: string;
  org: string;
  years?: string;
  inspector: { k: string; v: string }[];
  pitch: string;
  sections: { h: string; p?: string; list?: string[] }[];
  results: { value: string; label: string }[];
  highlight?: { value: string; label: string }[];
  media: 'mangut' | 'rabiola' | 'tales' | 'dominoes';
  link?: { href: string; label: string };
};

type Short = { title: string; org: string; text: string };

const en = {
  meta: {
    title: 'Alberto Assumpção · Tech Lead & Senior Unity Engineer',
    description:
      'Tech lead and senior Unity/C# engineer. Mobile multiplayer, custom physics, tooling, and the teams that ship them.',
  },
  nav: { work: 'Work', more: 'Index', contact: 'Contact', switchLabel: 'PT', switchHref: '/pt/' },
  hero: {
    role: 'Tech Lead · Senior Unity Engineer',
    first: 'Alberto',
    last: 'Assumpção',
    lead: 'I build game systems in Unity and C#, and lead the teams that ship them.',
    sub: 'Mobile multiplayer played by millions, a hand-made physics engine for my own game, and the architecture that keeps a team fast.',
    hint: 'drag the hook',
    shippedAt: 'Worked at',
    platforms: 'Platforms',
  },
  workTitle: 'Selected work',
  cases: [
    {
      id: 'mangut',
      title: 'Mangut',
      org: 'Pink Mango · my indie studio',
      inspector: [
        { k: 'Role', v: 'Founder · director · lead programmer' },
        { k: 'Engine', v: 'Unity 2D · C#' },
        { k: 'Middleware', v: 'FMOD · Rewired · Steamworks' },
        { k: 'Platforms', v: 'Steam · Xbox (2027)' },
      ],
      pitch:
        'A hand-painted precision platformer about an app delivery rider racing to pay the bills.',
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
        { value: '5', label: 'languages in the demo' },
        { value: 'ID@Xbox', label: 'publishing contracts signed' },
      ],
      media: 'mangut',
      link: { href: 'https://store.steampowered.com/app/3195840/', label: 'Steam page' },
    },
    {
      id: 'dominoes',
      title: 'Dominoes Battle',
      org: 'Gazeus Games',
      inspector: [
        { k: 'Studio', v: 'Gazeus Games' },
        { k: 'Platforms', v: 'iPhone · iPad · Mac · Vision Pro' },
        { k: 'Players', v: '2 or 4 · online or vs bots' },
        { k: 'Model', v: 'Free to play · live ops' },
      ],
      pitch:
        'Competitive online dominoes from one of Brazil’s biggest casual game studios, built to keep players coming back every day.',
      sections: [
        {
          h: 'The game',
          list: [
            'Four rule sets (Turbo, Draw, All Fives, Block) for 2 players or 2 teams of 2.',
            'Online matches against players worldwide, with reconnection to resume an interrupted game.',
            'Async friend challenges: replay the same Turbo deal as a friend and compare scores.',
            'Live-ops layer: leagues, rankings, events, daily missions, chat, friends, cosmetics and a soft-currency economy.',
          ],
        },
      ],
      results: [
        { value: '7', label: 'languages' },
        { value: '4', label: 'Apple platforms' },
        { value: '4', label: 'rule sets' },
      ],
      highlight: [
        { value: '10M+', label: 'downloads on Google Play · Dominoes Jogatina' },
        { value: '380K+', label: 'Google Play ratings' },
        { value: '4.7★', label: 'App Store · Dominoes Battle' },
      ],
      media: 'dominoes',
      link: { href: 'https://apps.apple.com/app/id1521913067', label: 'App Store' },
    },
    {
      id: 'rabiola-tales',
      title: 'Rabiola Tales',
      org: 'Black Public Media · Vild Studio',
      inspector: [
        { k: 'Role', v: 'Developer · kite physics and VR interaction' },
        { k: 'Engine', v: 'Unity · C#' },
        { k: 'Platforms', v: 'Meta Quest · Rift · Rift S' },
        { k: 'Format', v: '6DoF VR · ~20 min · seated or standing' },
      ],
      pitch:
        'A kite-shop owner teaches you to fly a kite over the rooftops of a Rio favela, while telling stories about the neighborhood.',
      sections: [
        {
          h: 'Problem',
          p: 'Everyone in Rio grew up flying kites, so everyone knows the second one feels wrong. In VR there is no screen between you and the kite: if the line, the wind or the dive is off, the whole experience is off.',
        },
        {
          h: 'What I built',
          list: [
            'The kite flight model: custom physics for wind, lift, drag and line tension, tuned until it behaves like a real rooftop kite.',
            'Line control with tracked hands: pull and give slack to climb, dive and steer, the way you learn it on a rooftop.',
          ],
        },
      ],
      results: [
        { value: '6DoF', label: 'Meta Quest and Rift' },
        { value: '~20 min', label: 'narrative VR experience' },
        { value: '2021', label: 'NewImages festival network, Paris' },
      ],
      media: 'tales',
    },
    {
      id: 'rabiola',
      title: 'Rabiola Céu Aberto',
      org: 'Okoto Studio',
      inspector: [
        { k: 'Role', v: 'Developer · projection client, server and infra' },
        { k: 'Stack', v: 'Unity 6 · Node.js · WebSocket' },
        { k: 'Hosting', v: 'Heroku' },
        { k: 'Format', v: 'Location-based · projection mapped' },
      ],
      pitch:
        'The street spin-off of Rabiola Tales: a sky projected on a building, and anyone walking by flies a kite in it from their own phone.',
      sections: [
        {
          h: 'Problem',
          p: 'A live installation has no second take. Strangers join and leave at random, phones go idle and lose signal, and if anything drops a crowd is staring at a frozen wall.',
        },
        {
          h: 'What I built',
          list: [
            'Three pieces, one socket: the Unity client that drives the projection, a Node.js WebSocket relay, and a web controller, so the phone needs nothing installed.',
            'A tiny protocol: each phone gets a letter that is its kite. Swipes go up as commands, catches come back as a personal score.',
            'Live-event hardening: protocol-level heartbeat under the host 55 s idle cutoff, any message counts as a sign of life, kite resume after a dropped connection (no ghost kites) and a clean reset between matches.',
            'Built for showtime: one always-on process with state in memory on purpose, and keyboard controls for match length, field of view and HUD placement to fit any wall.',
          ],
        },
      ],
      results: [
        { value: '26', label: 'players flying at once' },
        { value: '0', label: 'apps to install: the browser is the gamepad' },
        { value: 'US$25K', label: '2nd place, Pitch Black 2022 (Black Public Media)' },
      ],
      media: 'rabiola',
      link: { href: 'https://rabiolaopen.com', label: 'Project site' },
    },
  ] as Case[],
  moreTitle: 'Index',
  more: [
    {
      title: 'Tech Lead',
      org: '762interactive',
      text: 'Technical architecture, design docs and tooling for the team, in Unity 6.',
    },
    {
      title: 'Dominoes Jogatina',
      org: 'Gazeus Games',
      text: 'The original online dominoes for Android and iOS. 10M+ downloads on Google Play.',
    },
    { title: 'Project Genesis', org: 'YDreams', text: '' },
  ] as Short[],
  contact: {
    title: 'Contact',
    text: 'Building something in Unity? I’m always up for a good conversation about games and code.',
  },
  footer: 'Built with Astro. No frameworks were harmed.',
};

const pt: typeof en = {
  meta: {
    title: 'Alberto Assumpção · Tech Lead e Senior Unity Engineer',
    description:
      'Tech lead e engenheiro Unity/C# sênior. Multiplayer mobile, física custom, ferramentas e os times que entregam.',
  },
  nav: { work: 'Projetos', more: 'Índice', contact: 'Contato', switchLabel: 'EN', switchHref: '/' },
  hero: {
    role: 'Tech Lead · Senior Unity Engineer',
    first: 'Alberto',
    last: 'Assumpção',
    lead: 'Construo sistemas de jogo em Unity e C# e lidero os times que botam eles na rua.',
    sub: 'Multiplayer mobile jogado por milhões, um motor de física feito à mão pro meu próprio jogo e a arquitetura que mantém um time rápido.',
    hint: 'arraste o gancho',
    shippedAt: 'Trabalhei em',
    platforms: 'Plataformas',
  },
  workTitle: 'Projetos',
  cases: [
    {
      id: 'mangut',
      title: 'Mangut',
      org: 'Pink Mango · meu estúdio indie',
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
        { value: '5', label: 'idiomas na demo' },
        { value: 'ID@Xbox', label: 'contratos de publicação assinados' },
      ],
      media: 'mangut',
      link: { href: 'https://store.steampowered.com/app/3195840/', label: 'Página na Steam' },
    },
    {
      id: 'dominoes',
      title: 'Dominoes Battle',
      org: 'Gazeus Games',
      inspector: [
        { k: 'Estúdio', v: 'Gazeus Games' },
        { k: 'Plataformas', v: 'iPhone · iPad · Mac · Vision Pro' },
        { k: 'Jogadores', v: '2 ou 4 · online ou contra bots' },
        { k: 'Modelo', v: 'Free to play · live ops' },
      ],
      pitch:
        'Dominó online competitivo de um dos maiores estúdios de jogos casuais do Brasil, feito pro jogador voltar todo dia.',
      sections: [
        {
          h: 'O jogo',
          list: [
            'Quatro regras (Turbo, Draw, All Fives, Block) pra 2 jogadores ou 2 duplas.',
            'Partidas online contra o mundo todo, com reconexão pra retomar jogo interrompido.',
            'Desafio assíncrono entre amigos: a mesma mão de Turbo jogada pelos dois, placar comparado.',
            'Camada de live ops: ligas, ranking, eventos, missões diárias, chat, amigos, cosméticos e economia de moeda virtual.',
          ],
        },
      ],
      results: [
        { value: '7', label: 'idiomas' },
        { value: '4', label: 'plataformas Apple' },
        { value: '4', label: 'regras de jogo' },
      ],
      highlight: [
        { value: '10 mi+', label: 'downloads no Google Play · Dominoes Jogatina' },
        { value: '380 mil+', label: 'avaliações no Google Play' },
        { value: '4,7★', label: 'App Store · Dominoes Battle' },
      ],
      media: 'dominoes',
      link: { href: 'https://apps.apple.com/app/id1521913067', label: 'App Store' },
    },
    {
      id: 'rabiola-tales',
      title: 'Rabiola Tales',
      org: 'Black Public Media · Vild Studio',
      inspector: [
        { k: 'Papel', v: 'Dev · física da pipa e interação em VR' },
        { k: 'Engine', v: 'Unity · C#' },
        { k: 'Plataformas', v: 'Meta Quest · Rift · Rift S' },
        { k: 'Formato', v: 'VR 6DoF · ~20 min · sentado ou em pé' },
      ],
      pitch:
        'O dono de uma loja de pipa te ensina a empinar sobre as lajes de uma favela do Rio enquanto conta histórias do bairro.',
      sections: [
        {
          h: 'Problema',
          p: 'Todo mundo no Rio cresceu soltando pipa, então todo mundo sabe na hora quando uma está errada. Em VR não tem tela entre você e a pipa: se a linha, o vento ou o dibico estiver errado, a experiência inteira desanda.',
        },
        {
          h: 'O que eu construí',
          list: [
            'O modelo de voo da pipa: física custom de vento, sustentação, arrasto e tensão da linha, ajustada até se comportar como pipa de laje de verdade.',
            'Controle da linha com as mãos rastreadas: puxa e dá linha pra subir, dibicar e manobrar, do jeito que se aprende na laje.',
          ],
        },
      ],
      results: [
        { value: '6DoF', label: 'Meta Quest e Rift' },
        { value: '~20 min', label: 'experiência narrativa em VR' },
        { value: '2021', label: 'rede do festival NewImages, Paris' },
      ],
      media: 'tales',
    },
    {
      id: 'rabiola',
      title: 'Rabiola Céu Aberto',
      org: 'Okoto Studio',
      inspector: [
        { k: 'Papel', v: 'Dev · cliente da projeção, servidor e infra' },
        { k: 'Stack', v: 'Unity 6 · Node.js · WebSocket' },
        { k: 'Hospedagem', v: 'Heroku' },
        { k: 'Formato', v: 'Instalação · projeção mapeada' },
      ],
      pitch:
        'O spin-off do Rabiola Tales pra rua: um céu projetado num prédio, e qualquer um que passa empina pipa nele pelo próprio celular.',
      sections: [
        {
          h: 'Problema',
          p: 'Instalação ao vivo não tem segunda chance. Desconhecidos entram e saem a qualquer hora, celular fica ocioso e perde sinal, e se algo cai tem gente olhando pra uma parede congelada.',
        },
        {
          h: 'O que eu construí',
          list: [
            'Três peças, um socket: o cliente Unity que roda a projeção, um relay WebSocket em Node.js e um controle web, pro celular não precisar instalar nada.',
            'Um protocolo mínimo: cada celular ganha uma letra, que é a pipa dele. Swipe sobe como comando, pipa coletada volta como placar pessoal.',
            'Blindagem de evento ao vivo: heartbeat no protocolo abaixo do corte de 55 s do host, qualquer mensagem conta como sinal de vida, retomada da pipa depois de queda (sem pipa fantasma) e reset limpo entre partidas.',
            'Feito pra hora do show: um processo sempre ligado, com estado em memória de propósito, e atalhos pra duração da partida, campo de visão e posição do HUD, pra caber em qualquer parede.',
          ],
        },
      ],
      results: [
        { value: '26', label: 'jogadores ao mesmo tempo' },
        { value: '0', label: 'apps pra instalar: o navegador é o controle' },
        { value: 'US$25 mil', label: '2º lugar, Pitch Black 2022 (Black Public Media)' },
      ],
      media: 'rabiola',
      link: { href: 'https://rabiolaopen.com', label: 'Site do projeto' },
    },
  ],
  moreTitle: 'Índice',
  more: [
    {
      title: 'Tech Lead',
      org: '762interactive',
      text: 'Arquitetura técnica, documentação de design e ferramentas pro time, em Unity 6.',
    },
    {
      title: 'Dominoes Jogatina',
      org: 'Gazeus Games',
      text: 'O dominó online original pra Android e iOS. Mais de 10 milhões de downloads no Google Play.',
    },
    { title: 'Project Genesis', org: 'YDreams', text: '' },
  ],
  contact: {
    title: 'Contato',
    text: 'Tá fazendo algo em Unity? Sempre topo uma boa conversa sobre jogos e código.',
  },
  footer: 'Feito com Astro. Nenhum framework foi ferido.',
};

export const content = { en, pt };
