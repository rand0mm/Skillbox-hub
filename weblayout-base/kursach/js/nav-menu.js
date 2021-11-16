
window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#open-nav-menu-btn').addEventListener('click', function(){
    var headerHeight  = document.querySelector('.header').offsetHeight + document.querySelector('.hero').offsetHeight;
    var navMenu       = document.getElementById('nav-menu');
    navMenu.style.height = headerHeight + 'px';
    body.classList.add('lock');
    document.querySelector('#nav-menu').classList.add('nav-menu-is');
    setTimeout(() =>{
      document.querySelector('#nav-menu').classList.toggle('nav-menu-is-active');
    }, 300);

  });

})

window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#close-nav-menu-btn').addEventListener('click', function(){
    body.classList.remove('lock');
    document.querySelector('#nav-menu').classList.toggle('nav-menu-is-active');
    document.getElementById('nav-menu').removeAttribute("style");
    setTimeout(() =>{
      document.querySelector('#nav-menu').classList.remove('nav-menu-is');
    }, 600);
  });

});
