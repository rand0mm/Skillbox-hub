import JustValidate from 'just-validate';
import Inputmask from 'inputmask';
import modalOpen from './modal';

function sendmail() {
  const form = document.querySelector('.callback__form');
  const input = document.querySelectorAll('input[type="tel"]');
  const im = new Inputmask('+7 (999) 999-99-99');
  im.mask(input);

  const validateForms = (selector, colorWrong, rules, messages) => {
    // eslint-disable-next-line no-new
    new JustValidate(selector, {
      colorWrong,
      rules,
      messages,
      submitHandler() {
        const formData = new FormData(selector);

        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              const curentModal = document.getElementById('modal_1');
              modalOpen(curentModal);
            }
          }
        };

        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);

        selector.reset();
      },
    });
  };

  validateForms(form, '#D11616',
    {
      name: {
        required: true,
        minLength: 2,
        maxLength: 30,
      },

      tel: {
        required: true,
        strength: { custom: '[^_]$' },
      },
    },

    {
      name: {
        required: 'Недопустимый формат',
        minLength: 'Короткое имя',
        maxLength: 'Длинное имя',
      },

      tel: 'Недопустимый формат',

    });
}

export default sendmail;
