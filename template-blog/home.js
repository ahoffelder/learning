document.addEventListener("DOMContentLoaded", function() {
  var navbar = document.getElementById("navbar");
  var navbarOffset = navbar.offsetTop;

  window.onscroll = function() {
	/* Adiciona uma classe chamada "fixed" quando a primeira posição Y da tela é maior do que a primeira posição Y do elemento "navbar",
       ou seja, quando a navbar atinge o topo da tela */
    if (window.pageYOffset >= navbarOffset) {
      navbar.classList.add("fixed");
    } else {
      navbar.classList.remove("fixed");
    }
  };
});