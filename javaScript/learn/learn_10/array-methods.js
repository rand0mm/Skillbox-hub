const array = [];

array.push('в конец');
array.unshift('в начало');

// Метод удаляет из массива первый элемент и сразу же возвращает его
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const first = numbers.shift();
console.log(first); // 0
console.log(numbers); // 1, 2, 3 ...

// И похожий метод, который удаляет и возвращает последний элемент массива
const last = numbers.pop();
console.log(last); // 9
console.log(numbers); // 1, 2, 3, 4, 5, 6, 7, 8

while (numbers.length) {
    // На каждой итерации цикла массив "худеет" на один элемент
    console.log(`Another one bites the dust: ${numbers.pop()}`);
}


const numbers2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const middle = numbers2.splice(4, 2);
console.log(middle); // 4, 5
console.log(numbers2); // 0, 1, 2, 3, [отсюда мы убрали 2 элемента] 6, 7 ...

numbers2.splice(100, 100); // [], исходный массив не изменится
numbers2.splice(6, 100); // [8, 9] вернутся и будут убраны из массива
console.log(numbers2); // 0, 1, 2, 3, 6, 7

numbers2.splice(4, 0, 4, 5);
console.log(numbers2); // 0, 1, 2, 3, 4, 5, 6, 7

const numbers3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const numbers3Reversed = numbers3.reverse();
console.log(numbers3Reversed); 

numbers3Reversed.sort(); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
numbers3Reversed.push(10, 11);
numbers3Reversed.sort(); // [0, 1, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9]

numbers3Reversed.sort((a, b) => a - b); // 0, 1, 2, ... 11  
numbers3Reversed.sort((a, b) => b - a); // 11, 10, 9 ... 0

numbers3.slice(); // полная копия массива
numbers3.slice(3); // копия от элемента с индексом 3 и до конца
numbers3.slice(-5); // копия 5-ти последних элементов
numbers3.slice(3, 5); // копия от индекса 3 до индекса 5, последний не включается (3, 4)
numbers3.slice(2, -2); // копия от индекса 2 до предпоследнего элемента (2-7)
numbers3.slice(100, 150); // пустой массив, в исходном нет таких индексов
