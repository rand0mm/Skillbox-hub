const students = [
    {name: 'Василий', age: 18},
    {name: 'Геннадий', age: 23},
    {name: 'Андрей', age: 17},
    {name: 'Тимофей', age: 29},
    {name: 'Иннокентий', age: 17},
];

students.includes({name: 'Василий', age: 18}); // false, так как это не тот Василий

students.find(student => student.name === 'Василий' && student.age === 18);
// объект студента {name: 'Василий', age: 18}
students.findIndex(student => student.name === 'Василий' && student.age === 18);
// индекс студента, то есть 0

students.find(student => student.age <= 16); // undefined, таких студентов нет
students.findIndex(student => student.age <= 16); // -1

students.every(student => student.age < 30); // true, все студенты младше 30 лет
students.every(student => student.age >= 18); // false, есть несовершеннолетние

students.some(student => student.age < 18); // true, есть несовершеннолетние
students.some(student => student.name === 'Иван'); // false, ниодного Ивана