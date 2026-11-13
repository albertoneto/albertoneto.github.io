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
      org: 'Leonardo Souza · Okoto Studio · Black Public Media',
      inspector: [
        { k: 'Role', v: 'Developer · VR kite physics, projection client, server and infra' },
        { k: 'Engine', v: 'Unity · C#' },
        { k: 'Network', v: 'Node.js · WebSocket · Heroku' },
        { k: 'Platforms', v: 'Meta Quest · Rift · projection + phones' },
      ],
      pitch:
        'Two ways to fly a kite over Rio: in VR, from a favela rooftop, and on the street, in a sky projected on a building with your phone as the controller.',
      sections: [
        {
          h: 'Rabiola Tales · VR',
          p: 'A kite-shop owner teaches you to fly over the rooftops of a Rio favela while telling stories about the neighborhood. Everyone in Rio grew up flying kites, so everyone knows the second one feels wrong.',
          list: [
            'The kite flight model: custom physics for wind, lift, drag and line tension, tuned until it behaves like a real rooftop kite.',
            'Line control with tracked hands: pull and give slack to climb, dive and steer.',
          ],
        },
        {
          h: 'Rabiola Céu Aberto · projection',
          p: 'The street spin-off: anyone walking by opens a page, gets a kite and flies it with up to 25 strangers. A live show has no second take, so the system had to survive idle phones, lost signal and people leaving mid-match.',
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
        { value: '6DoF', label: 'VR on Quest and Rift' },
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
    text: 'Games, systems and the teams that ship them. Always happy to talk shop.',
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
      org: 'Leonardo Souza · Okoto Studio · Black Public Media',
      inspector: [
        { k: 'Papel', v: 'Dev · física da pipa em VR, cliente da projeção, servidor e infra' },
        { k: 'Engine', v: 'Unity · C#' },
        { k: 'Rede', v: 'Node.js · WebSocket · Heroku' },
        { k: 'Plataformas', v: 'Meta Quest · Rift · projeção + celulares' },
      ],
      pitch:
        'Dois jeitos de empinar pipa no Rio: em VR, de cima de uma laje na favela, e na rua, num céu projetado num prédio com o celular de controle.',
      sections: [
        {
          h: 'Rabiola Tales · VR',
          p: 'O dono de uma loja de pipa te ensina a empinar sobre as lajes de uma favela do Rio enquanto conta histórias do bairro. Todo mundo no Rio cresceu soltando pipa, então todo mundo sabe na hora quando uma está errada.',
          list: [
            'O modelo de voo da pipa: física custom de vento, sustentação, arrasto e tensão da linha, ajustada até se comportar como pipa de laje de verdade.',
            'Controle da linha com as mãos rastreadas: puxa e dá linha pra subir, dibicar e manobrar.',
          ],
        },
        {
          h: 'Rabiola Céu Aberto · projeção',
          p: 'O spin-off pra rua: quem passa abre uma página, ganha uma pipa e empina com até 25 desconhecidos. Show ao vivo não tem segunda chance, então o sistema tinha que aguentar celular ocioso, sinal caindo e gente saindo no meio da partida.',
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
        { value: '6DoF', label: 'VR no Quest e no Rift' },
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
    text: 'Jogos, sistemas e os times que botam eles na rua. Bora trocar ideia.',
  },
  footer: 'Feito com Astro. Nenhum framework foi ferido.',
};

export const content = { en, pt };
