// 0 - вс, 1 - пн...
function printWeekday() {
    let dayIndex = new Date().getDay();
    let days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ];

    console.log(`Сегодня ${days[dayIndex]}`);
}

printWeekday();

// объявление функции с названием functionName
function functionName() {
    // тело функции
    console.log('Вызвана функция');
}

//вызов функции
functionName();

// присваиваем функцию переменной, название после function можно опустить
let functionVariable = function () {
    // тело функции
    console.log('Вызвана функция из переменной');
}

// используем название переменной
functionVariable();