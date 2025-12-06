var path = window.location.pathname;

var links = document.querySelectorAll('nav a');


links.forEach(function(link) {
  if (link.getAttribute('href') === path) {
    link.classList.add('active');
  }
});