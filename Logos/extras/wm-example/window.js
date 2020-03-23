
/**
 * >>> Cria janelas. 
 * Autor: Jessé Silva aka logoscoder - https://logoscoder.github.io
 */

// *** Controles globais.
var GlobalTopbarPressed = false;
var GlobalTopbarOffset = [0, 0];
var GlobalCurrentTopbarSelected = undefined;
var GlobalCurrentTopbarAreaSelected = undefined;
var GlobalLastZIndex = 1;

// *** Inicializa janela.
function Window (width, height, title) {
  this.width = width;
  this.height = height;
  this.title = title;
  this.content = '';
}

// *** Prepara e exibe janela.
Window.prototype.show = function () {
  
  // Constrói área da janela.
  var area = document.createElement('div');
  this.window = area;
  
  // Adiciona janela na body.
  document.body.appendChild(area);
  
  area.id = 'L'+ Math.random();
  area.style.width = this.width;
  area.style.height = this.height;
  area.style.backgroundColor = '#dddddd';
  area.style.color = 'white';
  area.style.borderColor = 'gray';
  area.style.borderStyle = 'solid';
  area.style.borderWidth = '1px';
  area.style.borderRadius = '3px';
  area.style.position = 'absolute';
  area.style.top = '10px';
  area.style.left = '10px';
  area.style.resize = 'both';
  area.style.overflow = 'hidden';
  area.style.boxShadow = '3px 3px 50px 3px black';
  
  // Constrói barra do topo da janela.
  var topbar = document.createElement('div');
  topbar.style.width = '100%';
  topbar.style.height = '20px';
  topbar.style.backgroundColor = '#cccccc';
  topbar.style.borderBottomColor = 'gray';
  topbar.style.borderBottomStyle = 'solid';
  topbar.style.borderBottomWidth = '1px';
  
  // Constrói área do ícone.
  var topbarSubareas = document.createElement('div');
  topbarSubareas.style.float = 'left';
  topbarSubareas.style.width = '20px';
  topbarSubareas.style.height = '20px';
  
  var circle = document.createElement('div');
  circle.style.backgroundColor = 'black';
  circle.style.width = '7px';
  circle.style.height = '7px';
  circle.style.borderRadius = '50%';
  circle.style.marginTop = '6px';
  circle.style.marginLeft = '6px';
  
  topbarSubareas.appendChild(circle);
  topbar.appendChild(topbarSubareas);
  
  // Título.
  var windowTitleFormatted = '', windowSize = this.width/10;
  for (var a=0; a<this.title.length; a++) {
    if (a < windowSize) {
      windowTitleFormatted += this.title[a];
    } else {
      windowTitleFormatted += '...';
      break;
    }
  }
  
  var title = document.createElement('div');
  title.style.float = 'left';
  title.style.height = '20px';
  title.style.marginTop = '2px';
  
  var titleText = document.createElement('div');
  titleText.innerHTML = windowTitleFormatted;
  titleText.style.fontWeight = 'bold';
  titleText.style.fontSize = '12px';
  titleText.style.color = 'black';
  titleText.style.fontFamily = 'Arial';
  
  title.appendChild(titleText);
  topbar.appendChild(title);
  
  // Botão fechar.
  var actionButtons = document.createElement('div');
  actionButtons.style.float = 'right';
  actionButtons.style.height = '20px';
  
  var closeButton = document.createElement('div');
  closeButton.style.float = 'right';
  closeButton.style.width = '20px';
  closeButton.style.height = '20px';
  closeButton.innerHTML = '&times;';
  closeButton.style.fontSize = '18px';
  closeButton.style.cursor = 'pointer';
  closeButton.style.color = 'black';
  
  actionButtons.appendChild(closeButton);
  
  // Botão maximizar.
  var maximizeButton = document.createElement('div');
  maximizeButton.style.float = 'right';
  maximizeButton.style.width = '20px';
  maximizeButton.style.height = '20px';
  maximizeButton.style.fontSize = '18px';
  maximizeButton.style.cursor = 'pointer';
  maximizeButton.style.color = 'black';
  
  var quadrado = document.createElement('div');
  quadrado.style.borderColor = 'black';
  quadrado.style.borderStyle = 'solid';
  quadrado.style.borderWidth = '1px';
  quadrado.style.width = '10px';
  quadrado.style.height = '10px';
  quadrado.style.marginTop = '4px';
  
  maximizeButton.appendChild(quadrado);
  actionButtons.appendChild(maximizeButton);
  
  // Botão minimizar.
  var minimizeButton = document.createElement('div');
  minimizeButton.style.float = 'right';
  minimizeButton.style.width = '20px';
  minimizeButton.style.height = '20px';
  minimizeButton.style.fontSize = '18px';
  minimizeButton.style.cursor = 'pointer';
  minimizeButton.style.color = 'black';
  
  var minimize = document.createElement('div');
  minimize.style.borderBottomColor = 'black';
  minimize.style.borderBottomStyle = 'solid';
  minimize.style.borderBottomWidth = '1px';
  minimize.style.width = '10px';
  minimize.style.height = '10px';
  minimize.style.marginTop = '4px';
  
  minimizeButton.appendChild(minimize);
  actionButtons.appendChild(minimizeButton);
  topbar.appendChild(actionButtons);
  
  // Área do conteúdo da janela.
  var content = document.createElement('div');
  var rect = area.getBoundingClientRect();
  var size = rect.height - 20 - 9;
  
  content.style.width = '100%';
  content.style.color = 'black';
  content.style.display = 'inline-block';
  content.style.height = size + 'px';
  content.style.overflow = 'auto';
  
  // Concatena os elementos na área de conteúdo da janela.
  var frag = document.createDocumentFragment();
  var elem = document.createElement('div');
  elem.innerHTML = this.content;

  while (elem.childNodes[0])
    frag.appendChild(elem.childNodes[0]);
  content.appendChild(frag);
  
  area.appendChild(topbar);
  area.appendChild(content);
  
  // Configura movimento da janela.  
  topbar.onmousemove = function (e) {
    topbar.style.cursor = 'move';
  };
  
  topbar.onmousedown = function (e) {
    GlobalTopbarOffset = [
      area.offsetLeft - e.clientX,
      area.offsetTop - e.clientY
    ];
    
    GlobalTopbarPressed = true;
    GlobalCurrentTopbarAreaSelected = area;
    GlobalCurrentTopbarSelected = topbar;
  };
  
  topbar.onmouseup = function (e) {
    GlobalTopbarPressed = false;
    GlobalCurrentTopbarAreaSelected = undefined;
    GlobalCurrentTopbarSelected = undefined;
  };
  
  topbar.onclick = function (e) {
    area.style.zIndex = GlobalLastZIndex++;
    document.getElementById(ToolbarControlID).style.zIndex = GlobalLastZIndex + 1;
  }
  
  // Detecta resize na janela
  var windowTitle = this.title;
  
  $(area).resize(function() {
    // Altera tamanho da área de conteúdo da janela.
    var rect = area.getBoundingClientRect();
    var size = rect.height - 20 - 9;
    content.style.height = size + 'px';
    
    // Altera tamanho do título da janela.
    var windowWidth = rect.width;
    var windowTitleFormatted = '', windowSize = windowWidth/10;
    for (var a=0; a<windowTitle.length; a++) {
      if (a < windowSize) {
        windowTitleFormatted += windowTitle[a];
      } else {
        windowTitleFormatted += '...';
        break;
      }
    }
    titleText.innerHTML = windowTitleFormatted;
  });
  
  // Botão de fechar a janela.
  closeButton.onclick = function () {
    document.getElementById('LDIV-'+ area.id).remove();
    area.remove();
  };
  
  // Botão de maximizar.
  var maximizeControl = false;
  var maximizeLastConfig;
  
  maximizeButton.onclick = function () {
    if (maximizeControl == false) {
      maximizeControl = true;
      maximizeLastConfig = area.getBoundingClientRect();
      
      var bodyRect = document.body.getBoundingClientRect();
      var barRect = document.getElementById(ToolbarControlID).getBoundingClientRect();
      var size = bodyRect.height - barRect.height;
      
      area.style.width = '100%';
      area.style.height = size +'px';
      area.style.position = 'absolute';
      area.style.left = '0px';
      area.style.top = '0px';
    } else {
      maximizeControl = false;
      
      area.style.width = maximizeLastConfig.width;
      area.style.height = maximizeLastConfig.height;
      area.style.position = 'absolute';
      area.style.left = maximizeLastConfig.left +'px';
      area.style.top = maximizeLastConfig.top +'px';
    }
  };
  
  // Botão minimizar.
  minimizeButton.onclick = function () {
    area.style.visibility = 'hidden';
    area.style.display = 'none';
  };
  
  // Adiciona janela na barra de tarefas.
  var toolbarContent = document.getElementById(ToolbarContentControlID);
  var toolbarItem = document.createElement('div');
  
  var titleFormatted = '';
  for (var a=0; a<this.title.length; a++) {
    if (a < 10) {
      titleFormatted += this.title[a];
    } else {
      titleFormatted += '...';
      break;
    }
  }
  
  toolbarItem.id = 'LDIV-'+ area.id;
  toolbarItem.style.height = '100%';
  toolbarItem.style.backgroundColor = '#dddddd';
  toolbarItem.style.cursor = 'pointer';
  toolbarItem.style.textAlign = 'center';
  toolbarItem.style.fontWeight = 'bold';
  toolbarItem.style.paddingTop = '2px';
  toolbarItem.style.display = 'inline-block';
  toolbarItem.style.marginLeft = '1px';
  toolbarItem.style.marginRight = '1px';
  toolbarItem.style.paddingLeft = '10px';
  toolbarItem.style.paddingRight = '10px';
  toolbarItem.style.width = '100px';
  toolbarItem.innerHTML = titleFormatted;
  toolbarContent.appendChild(toolbarItem);
  
  toolbarItem.onclick = function () {
    area.style.visibility = 'visible';
    area.style.display = 'block';
  };
};

// *** Controle de movimento das janelas.
window.onmousemove = function (e) {
  if (GlobalTopbarPressed == true) {
    
    // Move janela.
    GlobalCurrentTopbarSelected.style.cursor = 'move';
    GlobalCurrentTopbarAreaSelected.style.left = (e.clientX + GlobalTopbarOffset[0]) + 'px';
    GlobalCurrentTopbarAreaSelected.style.top  = (e.clientY + GlobalTopbarOffset[1]) + 'px';
    
    // Coloca a mesma no topmost.
    GlobalCurrentTopbarAreaSelected.style.zIndex = GlobalLastZIndex++;
    
    // Coloca toolbar no topmost acima da última janela.
    document.getElementById(ToolbarControlID).style.zIndex = GlobalLastZIndex + 1;
    
    e.preventDefault();
  }
};

/**
 * >>> Cria barra de ferramentas.
 */
 
var ToolbarControlID = -1, ToolbarContentControlID = -1;
 
// *** Inicializa barra de ferramentas.
function Toolbar () {
  ToolbarControlID = 'L'+ Math.random();
  ToolbarContentControlID = 'L'+ Math.random();
  
  var bar = document.createElement('div');
  this.bar = bar;
  
  bar.id = ToolbarControlID;
  bar.style.backgroundColor = 'gray';
  bar.style.width = '100%';
  bar.style.height = '20px';
  bar.style.position = 'absolute';
  bar.style.bottom = '0px';
  bar.style.borderTopWidth = '1px';
  bar.style.borderTopStyle = 'solid';
  bar.style.borderTopColor = 'black';
  
  var barContentArea = document.createElement('div');
  barContentArea.id = ToolbarContentControlID;
  barContentArea.style.width = '100%';
  
  bar.appendChild(barContentArea);
}

Toolbar.prototype.show = function () {
  document.body.appendChild(this.bar);
};
