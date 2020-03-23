
/*
** Responsável por carregar arquivos utilizados na aplicação.
**
** São eles:
**  style.css - Arquivo de estilos principal
**  main.js - Script de controle principal
*/

window.onload = function(e){
  (function() {
    var min = 1337;
    var max = 31337;
    var randToken = Math.floor(Math.random() * (+max - +min)) + +min;
    
    // style.css
    var link = document.createElement('link');
    link.href = './media/css/style.css?token='+ randToken;
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.media = 'screen,print';
    document.getElementsByTagName('head')[0].appendChild(link);
    
    // main.js
    var mainScript = document.createElement('script'); 
    mainScript.type = 'text/javascript'; 
    mainScript.src = "./media/js/main.js?token="+ randToken;
    
    var mainAppend = document.getElementsByTagName('script')[0]; 
    if (mainAppend)
      mainAppend.parentNode.insertBefore(mainScript, mainAppend);
  })();
};
