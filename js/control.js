window.onload = function(e){ 
  (function() {
    var randNumber = Math.floor((Math.random() * 100) + 1);
    var po = document.createElement('script'); 
    po.type = 'text/javascript'; 
    po.src = "./js/main.js";
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();
};
