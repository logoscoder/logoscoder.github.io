
$(document).ready(function(){
	
	// Topo.
	$('.top').html(
		"<span class='title' >Logoscoder Blog</span><br>" +
		"<span class='subtitle' >Conteúdo sobre computação, filosofia e questões de meu interesse.</span>"
	);
	
	// Menu.
	$('.menu').html(		
		//"<div class='item' ><a class='link1' href='index.html' >Início</a></div>"+
		"<div class='item' ><a class='link1' href='textos.html' >Textos</a></div>"+
		"<div class='item' ><a class='link1' href='codigos.html' >Códigos</a></div>"+
		"<div class='item' ><a class='link1' href='projetos.html' >Projetos</a></div>"+
		"<div class='item' ><a class='link1' href='sobre.html' >Sobre</a></div>"
	);
	
	// Footer.
  var date = new Date();
	$('.footer').html(date.getFullYear());
	
	// Exibe email.
	var trab = 'forever94';
	var ml = 'gmail';
	var dot = '.com';
	var email = 'aprendiz' + trab +'@'+ ml + dot;
	$('.email').html(email);
	
});









