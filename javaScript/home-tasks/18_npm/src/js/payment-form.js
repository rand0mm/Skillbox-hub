import { el,} from 'redom';


function paymentForm() {
  const formBody =
    el('form.form-container',
      el('div.field-container',[
        el('label.label', {for:'InputEmail1'}, 'Email'),
        el('input.input.input-email', {type: 'email', id:'inputEmail', 'aria-describedby':'emailHelp'}),
      ]),
      el('div.field-container',[
        el('label.label', {for:'cardnumber'}, 'Card Number'),
        el('span', {id:'generatecard'}, 'random card'),
        el('input.input.input-card-number', {type: 'text',id:'cardnumber', pattern: '[0-9]*', inputmode:'numeric'}),
        el('span.ccicon', {id:'ccicon'})
      ]),
      el('div.field-container',[
        el('label.label', {for:'expirationdate'}, 'Expiration (mm/yy)'),
        el('input.input.input-exp-date', {type: 'text',id:'expirationdate', pattern: '[0-9]*', inputmode:'numeric'}),
      ]),
      el('div.field-container',[
        el('label.label', {for:'securitycode'}, 'Security Code'),
        el('input.input.input-sec-code', {type: 'text',id:'securitycode', pattern: '[0-9]*', inputmode:'numeric'}),
      ]),
      el('button.btn.btn-primary  ', {disabled:'disabled' }, 'Оплатить')
    )
  return formBody;
}

export default paymentForm;
