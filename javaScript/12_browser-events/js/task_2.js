document.addEventListener('DOMContentLoaded', event => {
  const inputGroup = document.querySelector('.input-group');
  const inputs =  inputGroup.querySelectorAll('.form-control')
  const form = document.querySelector('.form');
  const list = document.querySelector('.list-group');
  const rulls = /[^а-яА-Я-  ]/g;

  inputGroup.addEventListener('keypress', event => {
    if (event.key.replace(rulls, '') === ''){
      event.preventDefault();
    }
  })

  inputs.forEach(element => {
    element.addEventListener('blur', event => {
      let str = event.target.value;
      str = str.replace(rulls, '')
      .replace(/(\s){2,}|(^\-+|\-+$)|(^\-+|\-+$)/g, ' ')
      .replace(/(\-){2,}/g, '-')
      .trim();
      if(!str) {
        event.target.value = str;
      } else {
        event.target.value = str[0].toUpperCase() + str.slice(1).toLowerCase();
      }
    });
  })

  form.addEventListener('submit', el => {
    el.preventDefault();
    let fullName = '';

    inputs.forEach(input => {
      let str = input.value;

      input.classList.remove('border-danger');

      if(str === '') {
        input.classList.add('border-danger')
        return fullName = '';
      }
      fullName += str + ' ';

    })
    if(fullName !== '') {
      const item = document.createElement('li');
      item.classList.add('list-group-item')
      item.textContent = fullName.trim();
      list.append(item);
      inputs.forEach(input => {
        input.value = '';
      })
    }
    return;
  })
})
