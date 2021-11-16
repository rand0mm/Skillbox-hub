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

  document.querySelector('.checkbox__caption').addEventListener('click', () => {
    document.querySelector('.checkbox__caption').classList.toggle('checkbox__caption--open');
    document.querySelectorAll('.checkbox-list__item').forEach( (e) =>{
      e.classList.toggle('check-box--open');
    })
  });

  document.querySelector('.checkbox__list').addEventListener('click', function(event){
    if (!event.target.closest('.custom-checkbox')) {
      return
    }
    event.target.closest('.checkbox-list__item').classList.toggle('check-box--active')
  });

  document.querySelectorAll('.tag__btn-delete').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(){
      tabsBtn.closest('.checkbox-list__item').classList.remove('check-box--active');
    });
  });

});





