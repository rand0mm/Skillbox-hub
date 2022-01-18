document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(event){
      document.querySelectorAll('.tabs__btn').forEach(function(tabContent){
        tabContent.classList.remove('tabs__item-active');
      })
      event.target.classList.toggle('tabs__item-active');
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.catalog__content').forEach(function(tabContent){
        tabContent.classList.remove('catalog__content--visible');
        setTimeout(() =>{
          tabContent.classList.remove('catalog__content--active');
        }, 300);
      });
      setTimeout(() =>{
        document.querySelector(`[data-target="${path}"]`).classList.add('catalog__content--active');
        setTimeout(() =>{
          document.querySelector(`[data-target="${path}"]`).classList.add('catalog__content--visible');
        }, 1);
      }, 300);


    });
  });
});

document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.painter-list__tab').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(event){
      document.querySelectorAll('.painter-list__tab').forEach(function(tabContent){
        tabContent.classList.remove('painter-list__tab--active');
      });
      event.target.classList.toggle('painter-list__tab--active');
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.painter').forEach(function(tabContent){
        tabContent.classList.remove('painter--active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('painter--active');
    });
  });
});


document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.custom-checkbox__item').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(event){
      const path = event.currentTarget.dataset.path;
      document.querySelector(`[data-target="${path}"]`).classList.toggle('tag--active')
    });
  });
});


document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.tag__btn-delete').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(event){
      const path = event.currentTarget.dataset.target;
      document.querySelector(`[data-path="${path}"]`).click();
    });
  });
});




