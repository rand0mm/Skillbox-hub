const dropList = document.querySelector('.header__drop-list');
const dropBtns    = document.querySelectorAll(".drop-btn");

dropList.addEventListener('click', (e) => {
  let target = e.target.closest('.drop-list__item');
  if(!target) {
    return;
  }
  let dropBox = target.querySelector('.drop-down__drop-down-content');
  const dropdowns = document.getElementsByClassName("drop-down-content");
  for (let i = 0; i < dropdowns.length; i++) {
    const opendropDown = dropdowns[i];
    if (opendropDown.classList.contains('show')) {
      opendropDown.classList.remove('show--opacity');
      setTimeout(() =>{
        opendropDown.classList.remove('show');
      }, 300);
    }
  };
  if (dropBox.classList.contains('show')) {
    dropBox.classList.remove('show--opacity');
    setTimeout(() =>{
      dropBox.classList.remove('show');
    }, 300);
  } else {
    dropBox.classList.add('show');
    setTimeout(() =>{
      dropBox.classList.add('show--opacity');
    }, 100);

  };

});

window.onclick = function(event) {
  if (event.target.closest('.drop-btn')) {
    event.target.classList.toggle('drop-btn--active')
  }
  if (!event.target.closest('.drop-btn')) {
    var dropButtons = document.querySelectorAll('.drop-btn');
    dropButtons.forEach(function(item){
      item.classList.remove('drop-btn--active')
   })
    var dropdowns = document.getElementsByClassName("drop-down-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      const opendropDown = dropdowns[i];
      if (opendropDown.classList.contains('show')) {
        opendropDown.classList.remove('show--opacity');
        setTimeout(() =>{
          opendropDown.classList.remove('show');
        }, 300);

      }
    };
  }
  };
