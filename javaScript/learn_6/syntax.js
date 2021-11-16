let name = 'Тимофей';
let surname = 'Тиунов';
let middle = 'Сергеевич';

let me = {
    name: name,
    surname: surname,
    middleName: middle,
    birthDate: { year: 1991, month: 3, day: 14},
    occupation: 'Системный архитектор',
    married: true,
    'property with spaces': null,
    // undefined здесь просто для примера, использовать его в качестве
    // значения в своих программах не нужно!
    'property.with.dots': undefined,
};

console.log(me);

// создаем новое свойство объекта
me.education = 'НИУ ВШЭ'
// изменяем существующее свойство объекта
me.occupation = 'Безработный';

// те же действия со строка
me['property with spaces'] = 42;
me['property.with.dots.dots'] = 42;

// удаляем свойство из объекста
delete me.education;
delete me['property with spaces'];

// получаем значения свойства
let myName = me.name;
let myBirthYear = me.birthDate.year;
let fourtyTwo = empyObj['propety with space'];
// значение несуществующего свойства - undefined
let emptyProp = empyObj.someProp;

// пустой объект
let empyObj = {};