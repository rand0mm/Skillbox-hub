const students = [
    {name: 'Василий', age: 18},
    {name: 'Геннадий', age: 23},
    {name: 'Андрей', age: 17},
    {name: 'Тимофей', age: 29},
    {name: 'Иннокентий', age: 17},
];

// Только несовершеннолетние студенты
const kids = students.filter(student => student.age < 18);

/*
[
    {name: 'Андрей', age: 17},
    {name: 'Иннокентий', age: 17},
]
*/

// Все, кроме Андреев
const notAndrey = students.filter(student => student.name !== 'Андрей');

/*
[
    {name: 'Василий', age: 18},
    {name: 'Геннадий', age: 23},
    {name: 'Тимофей', age: 29},
    {name: 'Иннокентий', age: 17},
]
*/


// .map

const students2 = [
    {name: 'Василий', age: 18},
    {name: 'Геннадий', age: 23},
    {name: 'Андрей', age: 17},
    {name: 'Тимофей', age: 29},
    {name: 'Иннокентий', age: 17},
];

students2.map(student => student.name); // Василий, Геннадий, Андрей ...

// Товары в корзине
const cartItems = [
    { name: 'Гречка, 500 г', price: 50, quantity: 3 },
    { name: 'Сок яблочный', price: 100, quantity: 1 },
    { name: 'Перфоратор', price: 8000, quantity: 2 },
];

// Посчитаем сумму к оплате
cartItems.reduce(
    // 1-й аргумент - ф-ция. В неё первый аргументом передаётся уже "накопленное"
    // значение, а вторым - очередной элемент массива.
    (total, item) => total + item.price * item.quantity,
    // 2-й аргумент - начальное значение для total
    0
);

// Чтобы стало понятнее, давайте посмотрим на то, как будет выглядеть вычисление
// без reduce

let total = 0;

for (const item of cartItems) {
    // и тут тот же самый код, который мы передали в функции в reduce
    total = total + item.price * item.quantity;
}
