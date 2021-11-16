window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#open-nav-menu-btn').addEventListener('click', function(){
    document.querySelector('#nav-menu').classList.add('nav-menu-is')
    setTimeout(() =>{
      document.querySelector('#nav-menu').classList.toggle('nav-menu-is-active');
    }, 300);
    
  });

})

window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#close-nav-menu-btn').addEventListener('click', function(){
    document.querySelector('#nav-menu').classList.toggle('nav-menu-is-active-close');
    document.querySelector('#nav-menu').classList.toggle('nav-menu-is-active');
    setTimeout(() =>{
      document.querySelector('#nav-menu').classList.remove('nav-menu-is');
    }, 300);
  });



})
