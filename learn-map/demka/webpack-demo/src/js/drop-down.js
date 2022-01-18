function dropDown() {
  const dropList = document.querySelector('.header__drop-list');

  dropList.addEventListener('click', (e) => {
    const target = e.target.closest('.drop-list__item');
    if (!target) {
      return;
    }
    const dropBox = target.querySelector('.drop-down__drop-down-content');
    const dropdowns = document.getElementsByClassName('drop-down-content');
    for (let i = 0; i < dropdowns.length; i++) {
      const opendropDown = dropdowns[i];
      if (opendropDown.classList.contains('show')) {
        opendropDown.classList.remove('show--opacity');
        setTimeout(() => {
          opendropDown.classList.remove('show');
        }, 300);
      }
    }
    if (dropBox.classList.contains('show')) {
      dropBox.classList.remove('show--opacity');
      setTimeout(() => {
        dropBox.classList.remove('show');
      }, 300);
    } else {
      dropBox.classList.add('show');
      setTimeout(() => {
        dropBox.classList.add('show--opacity');
      }, 100);
    }
  });

  window.onclick = (event) => {
    if (event.target.closest('.drop-btn')) {
      event.target.classList.toggle('drop-btn--active');
    }
    if (!event.target.closest('.drop-btn')) {
      const dropButtons = document.querySelectorAll('.drop-btn');
      dropButtons.forEach((item) => {
        item.classList.remove('drop-btn--active');
      });
      const dropdowns = document.getElementsByClassName('drop-down-content');
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        const opendropDown = dropdowns[i];
        if (opendropDown.classList.contains('show')) {
          opendropDown.classList.remove('show--opacity');
          setTimeout(() => {
            opendropDown.classList.remove('show');
          }, 300);
        }
      }
    }
  };
}
export default dropDown;
