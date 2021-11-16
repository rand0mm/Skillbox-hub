const form = document.querySelector('.callback__form');
let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);

let validateForms = function(selector, colorWrong, rules, messages) {
	new window.JustValidate(selector, {
    colorWrong: colorWrong,
		rules: rules,
    messages: messages,
		submitHandler: function(form) {
			let formData = new FormData(form);

			let xhr = new XMLHttpRequest();

			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
            const curentModal = document.getElementById('modal_1');
            modalOpen(curentModal);
					}
				}
			}

			xhr.open('POST', 'mail.php', true);
			xhr.send(formData);

			form.reset();

		}
	});
}

validateForms('.callback__form', '#D11616',
{
  name: {
    required: true,
    minLength: 2,
    maxLength: 30
  },

  tel: {
    required: true,
    strength: {custom: '[^_]$'}
  },
},

{
  name: {
    required: 'Недопустимый формат',
    minLength: 'Короткое имя',
    maxLength: 'Длинное имя'
  },

  tel: 'Недопустимый формат',

},

 );
