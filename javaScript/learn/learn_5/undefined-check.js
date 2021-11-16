let array = [1, 2, 3, false, null, undefined];

// проверяем, есть ли элемент с индексом 5
if (array[5] !== undefined) console.log('Элемент есть'); // не сработает
if (array.length > 5) console.log('Элемент есть'); 

// явно задаём пустое значение
let emptyVar = null;