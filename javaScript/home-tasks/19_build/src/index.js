/* eslint-disable camelcase */
import 'babel-polyfill';
import './style.scss';
import { mount } from 'redom';
import IMask from 'imask';
import validator from 'validator';
import modalFunc from './js/modal';
import paymentForm from './js/payment-form';

import amex from './assets/images/americanexpress.png';
import visa from './assets/images/visa.png';
import diners from './assets/images/dinersclub.png';
import discover from './assets/images/discover.png';
import jcb from './assets/images/solo.png';
import maestro from './assets/images/maestro.png';
import mastercard from './assets/images/mastercard.png';
import unionpay from './assets/images/westernunion.png';

modalFunc();

mount(document.querySelector('.modal-body'), paymentForm());

function isNumber(n) {
  // eslint-disable-next-line no-restricted-globals
  return !isNaN(parseFloat(n)) && isFinite(n);
}

const validate = (form) => {
  const inputs = form.querySelectorAll('.input');
  const submit = form.querySelector('.btn');
  submit.addEventListener('click', (e) => {
    e.preventDefault();
  });
  inputs.forEach((e) => {
    e.addEventListener('blur', () => {
      if (e.matches('.input-email')) {
        const res = validator.isEmail(e.value) ? 'is-valid' : 'error';
        e.classList.add(res);
      }
      if (e.matches('.input-card-number')) {
        const res = validator.isCreditCard(e.value.replace(/\s+/g, '')) ? 'is-valid' : 'error';
        e.classList.add(res);
      }
      if (e.matches('.input-exp-date')) {
        const date = e.value.split('/');
        const currentDate = new Date();
        const expDate = new Date(`20${date[1]}`, date[0]);
        const res = expDate < currentDate ? 'error' : 'is-valid';
        e.classList.add(res);
      }
      if (e.matches('.input-sec-code')) {
        const res = e.value.length === 3 && !isNumber(e.value) ? 'error' : 'is-valid';
        e.classList.add(res);
      }
      const valids = form.querySelectorAll('.is-valid');
      if (valids.length > 3) {
        submit.removeAttribute('disabled');
      } else {
        submit.setAttribute('disabled', 'disabled');
      }
    });
    e.addEventListener('focus', () => {
      e.classList.remove('error');
      e.classList.remove('is-valid');
      submit.setAttribute('disabled', 'disabled');
    });
  });
};

window.onload = () => {
  const cardnumber = document.getElementById('cardnumber');
  const expirationdate = document.getElementById('expirationdate');
  const securitycode = document.getElementById('securitycode');
  const ccicon = document.getElementById('ccicon');
  const generatecard = document.getElementById('generatecard');

  const form = document.querySelector('.form-container');

  // Mask the Credit Card Number Input
  const cardnumber_mask = new IMask(cardnumber, {
    mask: [{
      mask: '0000 000000 00000',
      regex: '^3[47]\\d{0,13}',
      cardtype: 'american express',
    },
    {
      mask: '0000 0000 0000 0000',
      regex: '^(?:6011|65\\d{0,2}|64[4-9]\\d?)\\d{0,12}',
      cardtype: 'discover',
    },
    {
      mask: '0000 000000 0000',
      regex: '^3(?:0([0-5]|9)|[689]\\d?)\\d{0,11}',
      cardtype: 'diners',
    },
    {
      mask: '0000 0000 0000 0000',
      regex: '^(5[1-5]\\d{0,2}|22[2-9]\\d{0,1}|2[3-7]\\d{0,2})\\d{0,12}',
      cardtype: 'mastercard',
    },
    // {
    //     mask: '0000-0000-0000-0000',
    //     regex: '^(5019|4175|4571)\\d{0,12}',
    //     cardtype: 'dankort'
    // },
    // {
    //     mask: '0000-0000-0000-0000',
    //     regex: '^63[7-9]\\d{0,13}',
    //     cardtype: 'instapayment'
    // },
    {
      mask: '0000 000000 00000',
      regex: '^(?:2131|1800)\\d{0,11}',
      cardtype: 'jcb15',
    },
    {
      mask: '0000 0000 0000 0000',
      regex: '^(?:35\\d{0,2})\\d{0,12}',
      cardtype: 'jcb',
    },
    {
      mask: '0000 0000 0000 0000',
      regex: '^(?:5[0678]\\d{0,2}|6304|67\\d{0,2})\\d{0,12}',
      cardtype: 'maestro',
    },
    // {
    //     mask: '0000-0000-0000-0000',
    //     regex: '^220[0-4]\\d{0,12}',
    //     cardtype: 'mir'
    // },
    {
      mask: '0000 0000 0000 0000',
      regex: '^4\\d{0,15}',
      cardtype: 'visa',
    },
    {
      mask: '0000 0000 0000 0000',
      regex: '^62\\d{0,14}',
      cardtype: 'unionpay',
    },
    {
      mask: '0000 0000 0000 0000',
      cardtype: 'Unknown',
    },
    ],
    dispatch(appended, dynamicMasked) {
      const number = (dynamicMasked.value + appended).replace(/\D/g, '');

      for (let i = 0; i < dynamicMasked.compiledMasks.length; i++) {
        const re = new RegExp(dynamicMasked.compiledMasks[i].regex);
        if (number.match(re) != null) {
          return dynamicMasked.compiledMasks[i];
        }
      }
      return null;
    },
  });

  // Mask the Expiration Date
  // eslint-disable-next-line no-unused-vars
  const expirationdate_mask = new IMask(expirationdate, {
    mask: 'MM{/}YY',
    blocks: {
      YY: {
        mask: '00',
      },

      MM: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 12,
      },
    },
  });

  // Mask the security code
  // eslint-disable-next-line no-unused-vars
  const securitycode_mask = new IMask(securitycode, {
    mask: '000',
  });

  cardnumber_mask.on('accept', () => {
    switch (cardnumber_mask.masked.currentMask.cardtype) {
      case 'american express':
        ccicon.style.background = `url(${amex})`;
        break;
      case 'visa':
        ccicon.style.background = `url(${visa})`;
        break;
      case 'diners':
        ccicon.style.background = `url(${diners})`;
        break;
      case 'discover':
        ccicon.style.background = `url(${discover})`;
        break;
      case ('jcb' || 'jcb15'):
        ccicon.style.background = `url(${jcb})`;
        break;
      case 'maestro':
        ccicon.style.background = `url(${maestro})`;
        break;
      case 'mastercard':
        ccicon.style.background = `url(${mastercard})`;
        break;
      case 'unionpay':
        ccicon.style.background = `url(${unionpay})`;
        break;
      default:
        ccicon.style.background = 'transparent';
        break;
    }
  });

  // Generate random card number from list of known test numbers
  const randomCard = () => {
    const testCards = [
      '4000056655665556',
      '5200828282828210',
      '371449635398431',
      '6011000990139424',
      '30569309025904',
      '3566002020360505',
      '6200000000000005',
      '6759649826438453',
    ];
    const randomNumber = Math.floor(Math.random() * testCards.length);
    cardnumber_mask.unmaskedValue = testCards[randomNumber];
  };
  generatecard.addEventListener('click', () => {
    randomCard();
    const input = form.querySelector('.input-card-number');
    input.focus();
  });

  validate(form);
};
