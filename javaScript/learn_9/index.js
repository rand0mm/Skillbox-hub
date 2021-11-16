// Ошибка! Обращение к переменной, которая еще не объявлена
console.log(someVar);

let someVar = 10;

function someFunction() {}

console.log(someVar); //10
someFunction();
{
    let temperature = 36.6;

    console.log(temperature);

    if (temperature > 0) {
        console.log(temperature);
    }

    if (temperature > 3) {
        // Переопределение temperature во вложенном блоке
        let temperature = 10;

        console.log(temperature);
    }

    console.log(temperature);
}
// Ошибка! имя temperature не объявленно в этой области видимости
console.log(temperatue);


// Ошибка ! Нельзя объявить константу без значения
const x;

{
    // Объявляем константу healthy со значение 36.6
    const healthyTemp = 36.6;

    // Ошибка! Нельзя присвоить константе новое значение
    healthyTemp += 20;
}
// Ошибка! Имя healthy не объявлено в этой области видимости
console.log(healthyTemp);

// Когда применять const

// 1 Неизменяемые величины
// Ускорение свободного падения на Земле (g)...

const EARTH_FALL_ACCELERATION = 9.78;
// ..и на Марсе
const MARS_FALL_ACCELERATION = 3.711;

// 2. Значения, которые мы не хотим случайно изменить
for (const item of items) {
    console.log(item);
}

// Создаем константу с объекту
const me = { name: 'Тиунов'};

// Мы можем свободно менять свойство самого объекта
me.surname = me.name;
me.name = 'Тимофей';

// Ошибка! Но мы не можем присвоить в константу новый объект
me = {};


