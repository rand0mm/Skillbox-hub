// Функция, которая будет обработчиком события click по кнопке. Сами кнопки
// создаем ниже.
function onButtonClick() {
    // Счетчик, просто увеличивает число в textContent на единицу.
    this.textContent = String(Number(this.textContent) + 1);
}

// создаем несколько кнопок и привязываем к каждой обработчик
for (let i = 0; i <  5; i++) {
    const btn = document.createElement('button');
    btn.textContent = '1';
    document.body.append(btn)
    btn.addEventListener('click', onButtonClick)
}

// Внутри обработчика this будет DOM элементом того объекта, к которому привязан обработчик. Это значит
// что у каждой кнопки, хоть и один тот же обработчик, this будет разным. И что будет равен той кнопке, на
// которую нажал пользователь. Таким образом на каждой кнопке получился свой счетчик нажатий.
