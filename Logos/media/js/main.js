
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
  $.getJSON('configuration.json?token='+ GetRandNumberToken()).done((data) => {
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

// EOF.
// *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** 
