export default {
  home:true,
  menu: {
    main: [
      {label:'Apresentação', href:'#about'},
      // {label:'Serviços', href:'#services'},
      // {label:'Trabalho remoto', href:'#remote_work'},
      {label:'Portfólio', href:'#portfolio'},
      {label:'Contato', href:'#contact'},
    ]
  },
  cover: {
    name: 'Marcelo Kohl',
    craft: 'Front-end, UX Designer & Game Developer'
  },
  skills: {
    title: 'Conhecimentos',
    concepts: {
      title: 'Conceitos / técnicas',
      list: [
        {name:'Responsividade'},
        {name:'UX'},
        {name:'Escalabilidade'},
        {name:'Semântica'},
        {name:'Componentização'},
        {name:'Organização de código e arquivos'},
        {name:'Reaproveitamento de código'},
        {name:'Acessibilidade'},
        {name:'Design'},
        {name:'Performance'},
        {name:'SPA'},
        {name:'Gamificação'},
      ]
    },
    technologies: {
      title: 'Tecnologias',
      list: [
        {name:'HTML'},
        {name:'CSS'},
        {name:'Javascript'},
        {name:'Bootstrap'},
        {name:'jQuery'},
        {name:'Vue.js'},
        {name:'Vuex'},
        {name:'Sass'},
        {name:'Wordpress'},
        {name:'Icomoon'},
        {name:'Git'},
        {name:'NPM'},
        {name:'Grunt'},
        {name:'SVG'},
        {name:'PHP'},
        {name:'Godot Engine'},
        {name:'JSON'},
      ]
    }
  },

  about: {
    title: 'Apresentação',
    text: 'Trabalho com desenvolvimento desde janeiro de 2005, quando comecei como designer e programador de jogos em Macromedia Flash pra EAD, passei por diversos projetos com Wordpress e fui me especializando em HTML e CSS em meados de 2011, época em que estava se popularizando o termo front-end developer. A partir daí adotei o front-end como minha profissão, porque me possibilita trabalhar com animações, programação de interfaces e UX.\nTambém trabalho como desenvolvedor de web games. Já programei dois jogos de séries animadas pro o site da Cartoon Network, e outros jogos utilizando jQuery ou game engines pra empresas de São Paulo e Florianópolis.\n\nAlém das tecnologias que trabalho e estou sempre aprimorando, como Bootstrap, Vue.js, Sass, Icomoon, Git, NPM, Grunt, SVG, PHP, Godot Engine, JSON, etc, acho crucial entender e desenvolver constantemente meus conhecimentos nos conceitos de responsividade, semântica, organização, componentização e reaproveitamento de código. E o mais importante de tudo, exercitar a criatividade, que é o que definitivamente resolve problemas.',

    remote_work: {
      title: 'Trabalho remoto',
      text: 'Eu trabalho como autônomo fazem 7 anos, e durante esse tempo evoluí bastante meus processos de trabalho e disciplina pra eu poder entregar um bom produto ao cliente, e atualmente me sinto capaz de trabalhar em qualquer projeto remotamente sem problema algum, já que eu trabalho em horário comercial, assim, posso manter contato com o cliente a qualquer momento. Pra ajudar nesse processo, eu utilizo a ferramenta de comunicação que o cliente preferir, Skype, Hangout, Telegram, Whatsapp, Messenger, Slack, etc. E pra apontamento de horas ou acompanhamento do projeto posso usar o que o cliente achar melhor, Jira, Trello, planilha do Google, etc. Como meu trabalho é 100% autônomo, garanto um trabalho de qualidade e entregue no prazo acordado.',
    }

  },

  services: {
    title: 'Serviços'
  },

  portfolio: {
    title: 'Portfólio',
    filters: ['Front-end','UX','Game'],
    list: [
      {
        title:'Plataforma Vibbra!',
        filters: ['Front-end','UX','Game'],
        thumb:'vibbra.jpg',
        tags: ['Vue.js', 'Bootstrap 4', 'jQuery', 'UX', 'Design'],
        link: 'https://beta.vibbra.com.br/#/',
        date: '05/2018',
        text: 'Esse projeto é uma plataforma de contratação de freelancers, onde atuei como desenvolvedor front-end e UX. Fui responsável por criar todas as telas do fluxo de navegação e discutir com o cliente as idéias e necessidades dele pra chegarmos num sistema ideal blablabla',
      },
      {
        title:'Vality',
        thumb:'vality.jpg',
        tags: ['Vue.js', 'Bootstrap 4', 'jQuery'],
        link: 'https://beta.vibbra.com.br/#/',
        date: '03/2018',
        text: ' Esse é o ultimo projeto VUE que trabalhei, lançado em abril agora, eu fui o responsável por toda UX design, programação e marcação front-end e a escolha das tecnologias do front, inclusive o VUE. O design foi mantido basicamente o padrão do Bootstrap, já que essa empresa é uma startup e o caixa deles era baixo.'
      },
      {
        title:'Site Vibbra!',
        thumb:'vibbra-site.jpg',
        tags: ['Bootstrap 4', 'jQuery'],
        link: 'https://vibbra.com.br/',
        date: '03/2018'
      },
      {
        title:'Verios',
        thumb:'verios.jpg',
        tags: ['Bootstrap 4', 'jQuery', 'Wordpress'],
        link: 'https://verios.com.br',
        date: '01/2018'
      },
      {
        title:'Associare',
        thumb:'associare.jpg',
        tags: ['Bootstrap 4', 'jQuery'],
        link: 'http://associare.com.br',
        date: '01/2018'
      },
      {
        title:'Foto Container',
        thumb:'fotocontainer.jpg',
        tags: ['Bootstrap 4', 'jQuery', 'Grav CMS'],
        link: 'http://www.fotocontainer.com.br/',
        date: '05/2017'
      },
      {
        title:'Orbis Ciclo Entregas',
        thumb:'orbis.jpg',
        tags: ['Bootstrap 4', 'jQuery', 'Angular', 'Wordpress'],
        link: 'http://orbiscicloentregas.com.br/',
        date: '06/2016'
      },
      {
        title:'Songster',
        thumb:'songster.jpg',
        tags: ['Bootstrap 4', 'jQuery'],
        link: 'http://materiais.songster.biz/cadastro-para-escolas',
        date: '06/2017'
      },
      {
        title:'Bubu e as corujinhas',
        thumb:'bubu.jpg',
        tags: ['Bootstrap 4', 'jQuery', 'Wordpress'],
        link: 'https://bubueascorujinhas.com.br/',
        date: '06/2015'
      },
      {
        title:'Split Studio',
        thumb:'split.jpg',
        tags: ['Bootstrap 4', 'jQuery', 'Wordpress'],
        link: 'http://splitstudio.com.br/',
        date: '06/2015'
      },
      {
        title:'Gooms',
        thumb:'gooms.jpg',
        tags: ['Construct 2'],
        link: 'http://gooms.co/',
        date: '03/2015'
      },


      // {
      //   title:'Gooms',
      //   thumd:'#',
      //   tags: ['Vue.js']
      // },

      // {
      //   title:'http://www.cartoonnetwork.com.br/jogo/em-busca-de-peponitas',
      //   thumd:'#',
      //   tags: ['Vue.js']
      // },
      // {
      //   title:'http://www.cartoonnetwork.com.br/jogo/cebolinha-ea-tumba-do-coelho',
      //   thumd:'#',
      //   tags: ['Vue.js']
      // },

    ]
  },

  contact: {
    title: 'Contato'
  }
}
