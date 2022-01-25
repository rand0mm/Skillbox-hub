/* eslint-disable no-useless-escape */
function formValidate() {
  const form = document.querySelector('.sub-form__form');
  const input = form.querySelector('.sub-form__input');
  function validate(address) {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(address) === false) {
      return false;
    }
    return true;
  }
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    input.classList.remove('error');
    input.classList.remove('send');
    const address = input.value;
    if (validate(address) === false) {
      input.value = '';
      input.placeholder = 'Неккоректный Email';
      input.classList.add('error');
      return;
    }
    input.value = '';
    input.placeholder = 'Отправлено';
    input.classList.add('send');
  });
}
export default formValidate;
