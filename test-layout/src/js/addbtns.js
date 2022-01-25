import modal from './modal';

function addBtns() {
  const btnAdd = document.querySelector('.add-btns__add');
  const btnchosen = document.querySelector('.add-btns__chosen');

  btnAdd.addEventListener('click', (e) => {
    e.preventDefault();
    const curentModal = document.getElementById('modal_1');
    modal(curentModal);
  });
  btnchosen.addEventListener('click', (e) => {
    e.preventDefault();
    const curentModal = document.getElementById('modal_2');
    modal(curentModal);
  });
}
export default addBtns;
