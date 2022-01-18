const btnSearch     = document.querySelector('.search__btn--search');
const btnSearchIcon = document.querySelector('.search-btn__icon');
const searchForm    = document.querySelector('.search-form');
const searchbox     = document.querySelector('.search-block');
const btnClose      = document.querySelector('.search-form__close');
const headerLogo    = document.querySelector('.header__logo');


window.addEventListener("click", function(e) {
  if (!e.target.closest('.search-block')) {
    setTimeout(() =>{
      searchbox.classList.remove('search-block--open');
      btnSearchIcon.classList.remove('search-btn__icon_transform_translate')
      headerLogo.classList.remove('header__logo_transform_translateX');
      searchForm.classList.remove('search-form--display');
      searchForm.reset();
    }, 300);
    searchForm.classList.remove('search-form--visible');

  }
});

btnSearch.addEventListener('click', () => {
  if (searchbox.classList.contains('search-block--open')) {
    setTimeout(() =>{
      searchbox.classList.remove('search-block--open');
      btnSearchIcon.classList.remove('search-btn__icon_transform_translate')
      headerLogo.classList.remove('header__logo_transform_translateX');
      searchForm.classList.remove('search-form--display');
      searchForm.reset();
    }, 300);
    searchForm.classList.remove('search-form--visible');
  }
  else {
    searchForm.classList.add('search-form--display');
    searchbox.classList.add('search-block--open');
    setTimeout(() =>{
      headerLogo.classList.add('header__logo_transform_translateX');

      searchForm.classList.add('search-form--visible');
      btnSearchIcon.classList.add('search-btn__icon_transform_translate')
  }, 100);
  }

});

btnClose.addEventListener('click', () => {
  if (searchbox.classList.contains('search-block--open')) {
    setTimeout(() =>{
      searchbox.classList.remove('search-block--open');
      btnSearchIcon.classList.remove('search-btn__icon_transform_translate')
      headerLogo.classList.remove('header__logo_transform_translateX');
      searchForm.classList.remove('search-form--display');
      searchForm.reset();
    }, 300);
    searchForm.classList.remove('search-form--visible');
  }
  else {
    searchForm.classList.add('search-form--display');
    searchbox.classList.add('search-block--open');
    setTimeout(() =>{
      headerLogo.classList.add('header__logo_transform_translateX');

      searchForm.classList.add('search-form--visible');
      btnSearchIcon.classList.add('search-btn__icon_transform_translate')
  }, 100);
  }

});
