
/*
** Responsável por controlar as ações da aplicação.
*/

// *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** 
// INICIALIZAÇÃO.

// Controle de carregamento das configurações.
var configuration = null
var configurationHandle = null
var configurationFlag = false

function LogosStartup () {
  $.getJSON('./config/configuration.json?token='+ GetRandNumberToken()).done((data) => {
    var process = false
    if (data) 
    if (data.projects) 
    if (data.articles) 
    if (data.menus) 
    {
      process = true
      configuration = data
      clearInterval(configurationHandle)
      configurationFlag = true
      StartApplication()
    }
    
    if (process == false) {
      configuration = null
      configurationFlag = false
    }
  }).fail(function() {
    configuration = null
    configurationFlag = false
  })
}

$(document).ready(()=>{
  
  // Configura links do menus.
  $('#btn-home').on('click', ()=>{
    window.location.href = './'
  })
  
  $('#btn-contact').on('click', ()=>{
    window.location.href = './?Contact'
  })
  
  // Controle do carregamento das configurações.
  configurationHandle = setInterval(()=>{
    if (configurationFlag == false) {
      configurationFlag = true
      LogosStartup()
    }
  }, 100)
})

// Inicializa aplicação.
function StartApplication () {
  
  // Controle de navegação.
  if ( CheckPostFound() )
    ProcessPost()
  else
    ProcessHome()
}

// *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** 
// FUNÇÕES DE PROCESSAMENTO DA HOME.

// Processa home.
function ProcessHome () {
  var content = '<div class="Logos-content-home-area" >'
  
  // Área à esquerda: projetos.
  content +=
    '<div class="Logos-content-area-left" >'+
    '  <div class="Logos-home-title" >'+
    '    <i class="fa fa-cubes" ></i> Projetos'+
    '  </div>';
  
  for (var a=0; a<configuration.projects.length; a++)
  {
    content +=
      '<div class="Logos-home-item" onclick="javascript:OpenProjectById(\''+ configuration.projects[a].param +'\');" >'+
      '  <div class="Logos-home-item-date" ><i class="fa fa-calendar-alt" ></i> '+ configuration.projects[a].date +'</div>'+
      '  <span class="Logos-home-item-text" >'+ configuration.projects[a].title +'</span><br>'+
      '</div>';
  }
  
  content += '</div>'
  
  // Área à direita: artigos.
  content += 
    '<div class="Logos-content-area-right" >'+
    '  <div class="Logos-home-title" >'+
    '    <i class="fa fa-file" ></i> Artigos'+
    '  </div>';
  
  for (var a=0; a<configuration.articles.length; a++)
  {
    content +=
      '<div class="Logos-home-item" onclick="javascript:OpenArticleById(\''+ configuration.articles[a].param +'\');" >'+
      '  <div class="Logos-home-item-date" ><i class="fa fa-calendar-alt" ></i> '+ configuration.articles[a].date +'</div>'+
      '  <span class="Logos-home-item-text" >'+ configuration.articles[a].title +'</span><br>'+
      '</div>';
  }
  
  content += '</div></div>'
  $('.Logos-content-area').html(content)
  ShowPage()
}

// *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** 
// FUNÇÕES DE PROCESSAMENTO DAS POSTAGENS.

// Processa postagens.
function ProcessPost () {
  var param = GetURLParam()
  
  // Verifica se é acesso ao menu.
  
  var menuFound = false
  for (var a=0; a<configuration.menus.length; a++) {
    if (configuration.menus[a].param == param) {
      LoadPost('menus', configuration.menus[a])
      menuFound = true
      break
    }
  }
  
  if (menuFound == true) {
    ShowPage()
    return true
  }
  
  // Processa postagem comum (Projects, Articles).
  var page = GetURLParamFull()
  if (page != null)
  if (page.route)
  if (page.param)
  {
    var postFound = false
    
    // Processa projetos.
    if (page.route == 'Project') {
      for (var a=0; a<configuration.projects.length; a++) {
        if (configuration.projects[a].param == page.param) {
          LoadPost('projects', configuration.projects[a])
          postFound = true
          break
        }
      }
    }
    
    // Processa artigos.
    else if (page.route == 'Article') {
      for (var a=0; a<configuration.articles.length; a++) {
        if (configuration.articles[a].param == page.param) {
          LoadPost('articles', configuration.articles[a])
          postFound = true
          break
        }
      }
    }
    
    if (postFound == true) {
      ShowPage()
      return true
    }
  }
}

// Carrega dados da postagem.
function LoadPost (type, post) {
  $.get('./'+ type +'/'+ post.file, (data, status) => {
    $('.Logos-content-area').html(data)
  })
}

// *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** 
// FUNÇÕES DE USO GERAL.

// Abre link da postagem de tipo 'Project' de acordo com o ID.
function OpenProjectById (param) {
  OpenPostById('Project', param)
}

// Abre link da postagem do tipo 'Artiche' de acordo com o ID.
function OpenArticleById (param) {
  OpenPostById('Article', param)
}

// Abre link de postagem.
function OpenPostById (type, param) {
  window.location.href = './?'+ type +'?'+ param
}

// Verifica se tem post para exibir.
function CheckPostFound () {
  return ( GetURLParam() == null ? false : true )
}

// Captura primeiro parâmetro da URL.
function GetURLParam () {
  var url = window.location.href.toString(), param = url.split('?')
  if (param[1])
    if (param[1].toString().trim().length > 0)
      return param[1]
  return null
}

// Captura parâmetro completo da URL.
function GetURLParamFull () {
  var url = window.location.href.toString()
  
  if (url.indexOf('&') != -1) {
    url = url.split('&')
    url = url[0]
    url = url.toString().trim()
  }
  
  var pos = url.indexOf('?')
  if (pos != -1) {
    var param = url.substring(pos+1, ( url.length ))
    if (param.indexOf('?') != -1) {
      var paramParts = param.split('?')
      if (paramParts)
      if (paramParts[0])
      if (paramParts[1])
        return {
          'route': paramParts[0],
          'param': paramParts[1]
        }
    }
  }
  return null
}

function ShowPage () {
  $('#In-nomine-patris-et-Filii-et-Spiritus-Sancti-Amen').delay(10).animate({ opacity: 1 }, 700);
}

function GetRandNumberToken () {
  var min = 1337;
  var max = 31337;
  return Math.floor(Math.random() * (+max - +min)) + +min;
}

// Controle da exibição do e-mail.
function enc (str) {
  var newStr = ''
  var key = 31337
  var ar = []
  
  for (var a=0; a<str.length; a++)
    ar.push( str[a].charCodeAt() * key )
  
  console.log(JSON.stringify(ar))
  return newStr
}

function SanctuSanctuSanctu () {
  var L0G05 = '', V3RBUM = 
  [
     3321722,3165037,3603755,3603755,3165037,
     3603755,3290385,3384396,3697766,3039689,
                    3635092,
                    3572418,   // 
                    3039689,   // P4t3R n0sT3r, Qu1 3s 1n c43L1s
                    3071026,   // S4ncT1f1c3Tur n0m3N TuuM
                    3039689,   // 4dv3N14T r3gNuM TuUm
                    3384396,   // f14T v0Lunt4s Tu4 s1cuT 1n c43L0, 3t 1n T3rr4
                    3259048,   // P4n3m n0sTruM c0t1d14NuM d4 n0B1s h0d13
                    3478407,   // eT d1m1tt3 n0b1s d3b1T4 n0stR4
                    2005568,   // s1cuT eT n0s d1mitt1muS d3b1t0riBu5 n0sTr1s
                    3227711,   // eT n1 n0s 1nduc4s 1n T3ntat10n3M
                    3415733,   // s3d lib3r4 n0s a m4L0
                    3039689,   // 
                    3290385,   // 4 M 3 M
                    3384396,   // 
                    1441502,   //   S 4 N C T U
                    3102363,   //         S 4 N C T U
                    3478407,   //               S 4 N C T U
                    3415733
  ]
  
  for (var a=0; a<V3RBUM.length; a++) 
    L0G05 += String.fromCharCode(V3RBUM[a] / 31337)
  
  return L0G05
}

function ShowMail () {
  $('.email-contact').text( SanctuSanctuSanctu() )
}

// EOF.
// *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** 
