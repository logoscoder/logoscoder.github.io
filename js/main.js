
// Textos.
var Textos = [
  {
    'titulo': 'O Ato Puro de Aristóteles',
    'data': '28/02/2018',
    'arquivo': 'O-Ato-Puro'
  },
  {
    'titulo': 'O Logos Divino',
    'data': '28/02/2018',
    'arquivo': 'O-Logos-Divino'
  },
  {
    'titulo': 'Análise a respeito da ordem cósmica',
    'data': '28/03/2018',
    'arquivo': 'Analise-a-respeito-da-ordem-cosmica'
  },
  {
    'titulo': 'A questão sobre o nada',
    'data': '31/03/2018',
    'arquivo': 'A-questao-sobre-o-nada'
  },
  {
    'titulo': 'Resumo dos livros: Convite à Filosofia e à História da Filosofia; e Filosofia e Cosmovisão; Mario F. dos Santos',
    'data': '20/05/2018',
    'arquivo': 'Resumo-Convite-a-Filosofia-e-a-Historia-da-Filosofia-Filosofia-e-Cosmovisa-MFS'
  },
  {
    'titulo': 'Síntese do Conjunto de Possibilidades com o Ato Puro de Aristóteles através do conceito de Eternidade',
    'data': '15/07/2018',
    'arquivo': 'Sintese-do-Conjunto-de-Possibilidades-com-o-Ato-Puro-de-Aristoteles-atraves-do-conceito-de-Eternidade'
  },
  {
    'titulo': 'Reflexão a respeito da verdade e das artes',
    'data': '09/09/2018',
    'arquivo': 'Reflexao-a-respeito-da-verdade-e-das-artes'
  },
  {
    'titulo': 'Pontos de conhecimento obrigatório sobre o estudo da lógica formal',
    'data': '13/09/2018',
    'arquivo': 'Pontos-de-conhecimento-obrigatorio-sobre-o-estudo-da-logica-formal'
  },
  {
    'titulo': 'Práticas e Métodos',
    'data': '04/10/2018',
    'arquivo': 'Praticas-e-Metodos'
  },
  {
    'titulo': 'O Homem Digno',
    'data': '04/10/2018',
    'arquivo': 'O-Homem-Digno'
  },
  {
    'titulo': 'Métodos para estimulação da memória',
    'data': '05/11/2018',
    'arquivo': 'Metodos-Para-Estimulacao-Da-Memoria'
  }
];

// Códigos
var Codigos = [
  {
    'titulo': 'PHP E-mail Sender',
    'data': '28/02/2018',
    'link': 'https://github.com/logoscoder/E-mail-Sender',
    'alink': true
  },
  {
    'titulo': 'Ajax Long Polling',
    'data': '28/02/2018',
    'link': 'https://github.com/logoscoder/Ajax-Long-Polling',
    'alink': true
  },
  {
    'titulo': 'Cálculo de Mensalidade',
    'data': '16/03/2018',
    'link': 'https://github.com/logoscoder/Calculo-de-Mensalidade',
    'alink': true
  },
  {
    'titulo': 'Gerenciador de Janelas em Javascript',
    'data': '02/04/2018',
    'link': 'https://github.com/logoscoder/Window-Manager',
    'alink': true
  },
  {
    'titulo': 'Logos IRC (Cliente de IRC)',
    'data': '11/04/2018',
    'link': 'https://github.com/logoscoder/LogosIRC',
    'alink': true
  },
  {
    'titulo': 'Logos Programming Language',
    'data': '13/04/2018',
    'alink': false,
    'arquivo': 'Logos-Programming-Language'
  },
  {
    'titulo': 'Dicionário Latim - Português',
    'data': '17/10/2018',
    'alink': false,
    'arquivo': 'Dicionario-Latim-Portugues'
  }
];

// Configurações.
var prefixo1 = '\\___(^_^)___/';
var prefixo2 = '<>';

// Contato.
var trab = 'forever94';
var ml = 'gmail';
var dot = '.com';
var mlf = 'aprendiz' + trab +'@'+ ml + dot;

var fblink = 'https://www.facebook.com/logoscoder';

// Texto sobre.
var TextoSobre =
  'Me chamo Jessé, minhas áreas de interesse são computação e filosofia em geral.<br><br>'+
  'Atualmente trabalho como freelancer e para isso programo em C, PHP e Javascript, mas também gosto de brincar com outras linguagens, tais como Java, Perl, Ruby, Python, C++, dentre outras. Também possuo interesse em segurança da informação, redes e áreas relacionadas.<br><br>'+
  'No que se refere a filosofia, possuo profundo interesse na ideia de apreender a realidade em sua concretude através do conhecimento do Logos, nosso Senhor Jesus Cristo.<br>';

$(document).ready(function(){
  console.log('main loaded!');
  
  // *** Redirecionamento para página padrão.
  if (window.location.href.toString().indexOf('index.html') != -1 || 
      window.location.href.toString() == 'https://logoscoder.github.io/' ||
      window.location.href.toString() == 'http://logoscoder.github.io/' ||
      window.location.href.toString() == 'https://logoscoder.github.io' ||
      window.location.href.toString() == 'http://logoscoder.github.io'
      )
    window.location.href = 'pagina.html?'+ prefixo1 +'textos';
  
  
  // *** Carrega template.
  
  // Processa menus ativos.
  var active1 = '', active2 = '', active3 = '';
  var urlActive = window.location.href.toString();
  
  if (urlActive.indexOf('/textos') != -1)
    active1 = 'active';
  else if (urlActive.indexOf('/codigos') != -1)
    active2 = 'active';
  else if (urlActive.indexOf('/sobre') != -1)
    active3 = 'active';
  
  // Menu.
  $('#menu').html(
    '<div class="blog-masthead">'+
    '  <div class="container">'+
    '    <nav class="blog-nav">'+
    '      <a class="blog-nav-item" href="index.html"><b>&Lambda;</b> Logoscoder</a>'+
    '      <a class="blog-nav-item '+ active1 +'" href="pagina.html?'+ prefixo1 +'textos">Textos</a>'+
    '      <a class="blog-nav-item '+ active2 +'" href="pagina.html?'+ prefixo1 +'codigos">Códigos</a>'+
    '      <a class="blog-nav-item '+ active3 +'" href="pagina.html?'+ prefixo1 +'sobre">Sobre</a>'+
    '    </nav>'+
    '  </div>'+
    '</div>'
  );
  
  // Sidebar e processamento dos ensinamentos.
  $.get('./ensinamentos.txt', function(dados) {
    dados = dados.split("\n");
    var ensinamento = dados[Math.floor(Math.random()*dados.length)];
    
    $('#sidebar').html(
      '<div class="col-sm-3 col-sm-offset-1 blog-sidebar">'+
      '  <div class="sidebar-module sidebar-module-inset">'+
      '    <h4>Ensinamento</h4>'+
      '    <p>'+ ensinamento +'</p>'+
      '  </div>'+
      '  <div class="sidebar-module">'+
      '    <h4>Contato</h4>'+
      '    <ol class="list-unstyled">'+
      '      <li><a href="mailto:'+ mlf +'">'+ mlf +'</a></li>'+
      '      <li><a target="_blank" href="'+ fblink +'">Facebook</a></li>'+
      '    </ol>'+
      '  </div>'+
      '</div>'
    );
  });  
  
  // *** Processa páginas.
  var url = window.location.href.toString();
  
  if (url.indexOf('pagina.html') != -1)
    ProcessaPaginas(url);
  
  
  // *** Processa postagens.
  if (url.indexOf('postagem.html') != -1)
    ProcessaPostagens(url);
  
});

// Processa postagens.
function ProcessaPostagens (url) {
  var uri = decodeURI(url);
  var path = uri.split(prefixo1);
  path = path[1].split(prefixo2);
  path = path[0].trim();
  
  var postagemLink = uri.split(prefixo2);
  postagemLink = postagemLink[1].trim();
  
  // Carrega dos da postagem.
  $.get('./'+ path +'/'+ postagemLink +'.txt', function (dados) {
    $('#post-data').html(dados);
    $('#postagem-titulo').text();
  });
}

// Processa páginas.
function ProcessaPaginas (url) {
  console.log('Acessou página.');
  if (url.indexOf('textos') != -1)
    InsereAreaTextos();
  if (url.indexOf('codigos') != -1)
    InsereAreaCodigos();
  if (url.indexOf('sobre') != -1)
    InsereAreaSobre();
}

// Insere área sobre.
function InsereAreaSobre () {
  InserePostagem({
    'titulo': 'Sobre',
    'subtitulo': '',
    'html': TextoSobre
  });
}

// Insere área dos códigos.
function InsereAreaCodigos () {
  var html = '';
  
  for (var a=Codigos.length-1; a>=0; a--) {
    if (Codigos[a].alink == true) {
      html += InsereLinkAreaDirect({
        'titulo': Codigos[a].titulo,
        'data': Codigos[a].data,
        'endereco': Codigos[a].link
      });
    }
    else {
      html += InsereLinkArea({
        'titulo': Codigos[a].titulo,
        'data': Codigos[a].data,
        'endereco': 'postagem.html?'+ prefixo1 + 'codigo'+ prefixo2 + Codigos[a].arquivo
      });
    }
  }
  
  InserePostagem({
    'titulo': 'Códigos',
    'subtitulo': '',
    'html': html
  });
}

// Insere área dos textos.
function InsereAreaTextos () {
  var html = '';
  
  for (var a=Textos.length-1; a>=0; a--) {
    html += InsereLinkArea({
      'titulo': Textos[a].titulo,
      'data': Textos[a].data,
      'endereco': 'postagem.html?'+ prefixo1 + 'texto'+ prefixo2 + Textos[a].arquivo
    });
  }
  
  InserePostagem({
    'titulo': 'Textos',
    'subtitulo': '',
    'html': html
  });
}

// Insere links formatados das áreas (textos, códigos).
function InsereLinkArea (dados) {
  return dados.data + ' - <a href="'+ dados.endereco +'" >'+ dados.titulo +'</a><br>';
}

// Insere links formatados das áreas (textos, códigos) [direct].
function InsereLinkAreaDirect (dados) {
  return dados.data + ' - <a target="_blank" href="'+ dados.endereco +'" >'+ dados.titulo +'</a><br>';
}

// Insere postagem.
function InserePostagem (dados) {
  var html = '';
  
  html += '<div class="blog-post">';
  html += '<h2 class="blog-post-title">'+ dados.titulo +'</h2>';
  html += '<p class="blog-post-meta">'+ dados.subtitulo +'</p>';
  html += dados.html;
  html += '</div>';
  
  $('#post-data').html(html);
}


























