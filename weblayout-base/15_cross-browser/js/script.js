const btnSearch = document.querySelector('.search__btn--search');
const btnClose = document.querySelector('.search-form__close');
const searchForm = document.querySelector('.search-form');

btnSearch.addEventListener('click', () => {
  searchForm.classList.add('search-form--display');
  btnSearch.classList.add('search__btn--open');
  setTimeout(() =>{
    searchForm.classList.add('search-form--visible');
  }, 300);
   
});

btnClose.addEventListener('click', () => {
  searchForm.classList.remove('search-form--visible');
  btnSearch.classList.remove('search__btn--open');
  setTimeout(() =>{
    searchForm.classList.remove('search-form--display');
    searchForm.reset();
  }, 300);
});