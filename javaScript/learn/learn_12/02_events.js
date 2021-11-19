// обработчик click на кнопке
document.querySelector('button').addEventListener('click', () => {});

// обработчик resize на окно браузера (window)
window.addEventListener('resize', () => {});

// обработчик DOMCOntentLoaded на документе
document.addEventListener('DOMContentLoaded', () => {});


const btn = docment.querySelector('button');

// мы просто присваиваем атрибуту значение, так же как и с другими атрибутами
btn.onclick = () => {
	console.log('Вы нажали на кнопку')
}


// у насть есть доступ к события window
window.onscroll = () => {
	console.log('Вы прокрутили скролл')
}

// <!-- убрать onclick= null -->
// <!-- window.onscroll = null -->

// для возможности снять событие надо вписать функцию как в примере ниже
const btn = document.querySelector('button');

const onClick = () => {};

btn.addEventListener('click', onClick);
btn.removeEventListener('click', onClick);