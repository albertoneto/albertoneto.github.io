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
  media: 'mangut' | 'rabiola' | 'dominoes';
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
      id: 'rabiola',
      title: 'Rabiola',
      org: 'Okoto Studio',
      inspector: [
        { k: 'Role', v: 'Developer · big-screen client and real-time server' },
        { k: 'Engine', v: 'Unity 6 · C#' },
        { k: 'Network', v: 'Node.js · WebSocket · Heroku' },
        { k: 'Format', v: 'Projection-mapped installation' },
      ],
      pitch:
        'A shared sky projected on a wall. Visitors fly kites from their own phones, no app install, and race to catch the ones that broke loose.',
      sections: [
        {
          h: 'Problem',
          p: 'A live installation has no second take. If the connection drops, a crowd is standing in front of a frozen wall. Phones go idle, lose signal and come back, and the show has to keep running.',
        },
        {
          h: 'What I built',
          list: [
            'The Unity big-screen client: kite control, catching, pooling and match flow, with a main-thread dispatcher between the socket and the game.',
            'A WebSocket relay that hands each phone its own kite, routes swipes to the screen and scores back to the phone.',
            'Live-event hardening: protocol-level heartbeat under the host’s 55 s idle cutoff, kite resume after a dropped connection so no ghost kites, and a clean reset broadcast between matches.',
          ],
        },
      ],
      results: [
        { value: '26', label: 'players flying at once' },
        { value: '0', label: 'apps to install: the phone browser is the gamepad' },
        { value: '2nd', label: 'Pitch Black 2022, Black Public Media' },
      ],
      media: 'rabiola',
      link: { href: 'https://rabiolaceuaberto.com.br', label: 'Project site' },
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
      id: 'rabiola',
      title: 'Rabiola',
      org: 'Okoto Studio',
      inspector: [
        { k: 'Papel', v: 'Dev · cliente do telão e servidor em tempo real' },
        { k: 'Engine', v: 'Unity 6 · C#' },
        { k: 'Rede', v: 'Node.js · WebSocket · Heroku' },
        { k: 'Formato', v: 'Instalação com projeção mapeada' },
      ],
      pitch:
        'Um céu compartilhado projetado na parede. O público empina pipa pelo próprio celular, sem instalar nada, e corre pra pegar as que voaram.',
      sections: [
        {
          h: 'Problema',
          p: 'Instalação ao vivo não tem segunda chance. Se a conexão cai, tem gente parada na frente de uma parede congelada. Celular fica ocioso, perde sinal e volta, e o show tem que seguir.',
        },
        {
          h: 'O que eu construí',
          list: [
            'O cliente Unity do telão: controle das pipas, coleta, pooling e fluxo da partida, com um dispatcher pra thread principal entre o socket e o jogo.',
            'Um relay WebSocket que dá a cada celular a sua pipa, leva os swipes pro telão e devolve os pontos pro celular.',
            'Blindagem de evento ao vivo: heartbeat no protocolo abaixo do corte de 55 s do host, retomada da pipa depois de queda (sem pipa fantasma) e reset limpo entre partidas.',
          ],
        },
      ],
      results: [
        { value: '26', label: 'jogadores ao mesmo tempo' },
        { value: '0', label: 'apps pra instalar: o navegador do celular é o controle' },
        { value: '2º', label: 'Pitch Black 2022, Black Public Media' },
      ],
      media: 'rabiola',
      link: { href: 'https://rabiolaceuaberto.com.br', label: 'Site do projeto' },
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
