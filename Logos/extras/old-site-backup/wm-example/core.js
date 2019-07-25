
var log = function(x){console.log(x);};
var counter = 0;

function MainThread () {
  
  // Cria barra de ferramentas.
  var toolbar = new Toolbar();
  toolbar.show();
  
  document.body.style.backgroundImage = 'url("background.png")';
  document.body.style.backgroundSize = '100% 100%';
  
  // Cria janela de exemplo.
  $('#add-window').on('click', function(){
    var wm = new Window(300, 300, 'Janela '+ counter);
    wm.content = '<center>Hello World!</center>';
    wm.show();
    counter++;
  });
}

window.onload = function () {
  log('LogOS started!');
  MainThread();
};
