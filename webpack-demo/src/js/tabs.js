function tabs() {
  const tabsBtns = document.querySelectorAll('.tabs__btn');
  const painterListTab = document.querySelectorAll('.painter-list__tab');
  const checkboxCaption = document.querySelector('.checkbox__caption');

  tabsBtns.forEach((tabsBtn) => {
    tabsBtn.addEventListener('click', (event) => {
      tabsBtns.forEach((tabContent) => {
        tabContent.classList.remove('tabs__item-active');
      });
      event.target.classList.toggle('tabs__item-active');
      const { path } = event.currentTarget.dataset;
      document.querySelectorAll('.catalog__content').forEach((tabContent) => {
        tabContent.classList.remove('catalog__content--visible');
        setTimeout(() => {
          tabContent.classList.remove('catalog__content--active');
        }, 300);
      });
      setTimeout(() => {
        document.querySelector(`[data-target="${path}"]`).classList.add('catalog__content--active');
        setTimeout(() => {
          document.querySelector(`[data-target="${path}"]`).classList.add('catalog__content--visible');
        }, 1);
      }, 300);
    });
  });

  painterListTab.forEach((tabsBtn) => {
    tabsBtn.addEventListener('click', (event) => {
      painterListTab.forEach((tabContent) => {
        tabContent.classList.remove('painter-list__tab--active');
      });
      event.target.classList.toggle('painter-list__tab--active');
      const { path } = event.currentTarget.dataset;
      document.querySelectorAll('.painter').forEach((tabContent) => {
        tabContent.classList.remove('painter--active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('painter--active');
    });
  });

  checkboxCaption.addEventListener('click', () => {
    checkboxCaption.classList.toggle('checkbox__caption--open');
    document.querySelectorAll('.checkbox-list__item').forEach((e) => {
      e.classList.toggle('check-box--open');
    });
  });

  document.querySelector('.checkbox__list').addEventListener('click', (event) => {
    if (!event.target.closest('.custom-checkbox')) {
      return;
    }
    event.target.closest('.checkbox-list__item').classList.toggle('check-box--active');
  });

  document.querySelectorAll('.tag__btn-delete').forEach((tabsBtn) => {
    tabsBtn.addEventListener('click', () => {
      tabsBtn.closest('.checkbox-list__item').classList.remove('check-box--active');
    });
  });
}

export default tabs;
