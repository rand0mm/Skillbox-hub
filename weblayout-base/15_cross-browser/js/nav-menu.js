window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#open-nav-menu-btn').addEventListener('click', function(){
    document.querySelector('#nav-menu').classList.toggle('nav-menu-is-active')



    document.querySelector('#logo').classList.toggle('logo-sm')
  })


  document.querySelector('#open-nav-menu-btn').addEventListener('mouseenter', function(){
    document.querySelector('#nav-menu').classList.add('nav-menu-is')

  })


  document.querySelector('#open-nav-menu-btn').onblur = function() {
    document.querySelector('#nav-menu').classList.add('nav-menu-is')
  }

  document.querySelector('#open-nav-menu-btn').onfocus = function() {
    document.querySelector('#nav-menu').classList.add('nav-menu-is')
  }



})

window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#close-nav-menu-btn').addEventListener('click', function(){
    document.querySelector('#nav-menu').classList.toggle('nav-menu-is-active')

    document.querySelector('#nav-menu').classList.remove('nav-menu-is')

    document.querySelector('#logo').classList.toggle('logo-sm')
  });



})
