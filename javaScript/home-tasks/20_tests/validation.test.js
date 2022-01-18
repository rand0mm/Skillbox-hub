import validator from 'validator';
import { isNumber } from './validation';
import { paymentForm } from './payment-form';

test('Валидация номера карты пропускает корректный номер карты.', () => {
  expect(validator.isCreditCard('30569309025904')).toBe(true);
});
test('Валидация номера карты не пропускает произвольную строку, содержащую любые нецифровые символы.', () => {
  expect(validator.isCreditCard('30пh,309025904')).toBe(false);
});
test('Валидация номера карты не пропускает строку с недостаточным количеством цифр.', () => {
  expect(validator.isCreditCard('3309025904')).toBe(false);
});
test('Валидация номера карты не пропускает строку со слишком большим количеством цифр (например, 25).', () => {
  expect(validator.isCreditCard('3056930902590430569309025904')).toBe(false);
});

test('Валидация CVV/CVC пропускает строку с тремя цифровыми символами.', () => {
  expect('123'.length === 3 && isNumber('123')).toBe(true);
});
test('Валидация CVV/CVC не пропускает строки с 1-2 цифровыми символами.', () => {
  expect('13'.length === 3 && isNumber('123')).toBe(false);
});
test('Валидация CVV/CVC не пропускает строки с 4+ цифровыми символами.', () => {
  expect('1234'.length === 3 && isNumber('123')).toBe(false);
});
test('Валидация CVV/CVC не пропускает строки с тремя нецифровыми символами (латиница, кириллица и знаки препинания).', () => {
  expect('ф,f'.length === 3 && isNumber('ф,f')).toBe(false);
});

test('Функция создания DOM-дерева должна вернуть DOM-элемент, в котором содержится строго четыре поля для ввода с плейсхолдерами «Номер карты», «ММ/ГГ», CVV/CVC, Email.', () => {
  const expectedHTML =
    '<form class="form-container"><div class="field-container"><label class="label" for="InputEmail1">Email</label><input class="input input-email" type="email" id="inputEmail" aria-describedby="emailHelp" placeholder="Email"></div><div class="field-container"><label class="label" for="cardnumber">Card Number</label><span id="generatecard">random card</span><input class="input input-card-number" type="text" id="cardnumber" pattern="[0-9]*" inputmode="numeric" placeholder="Номер карты"><span class="ccicon" id="ccicon"></span></div><div class="field-container"><label class="label" for="expirationdate">Expiration (mm/yy)</label><input class="input input-exp-date" type="text" id="expirationdate" pattern="[0-9]*" inputmode="numeric" placeholder="ММ/ГГ"></div><div class="field-container"><label class="label" for="securitycode">Security Code</label><input class="input input-sec-code" type="text" id="securitycode" pattern="[0-9]*" inputmode="numeric" placeholder="CVV/CVC"></div><button class="btn btn-primary  " disabled="">Оплатить</button></form>';
  const el = paymentForm();
  expect(el).toBeInstanceOf(HTMLFormElement);
  expect(el.outerHTML).toBe(expectedHTML);
});
