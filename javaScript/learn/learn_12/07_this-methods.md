https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/call

римечание: хотя синтаксис этой функции практически полностью идентичен функции apply(), фундаментальное различие между ними заключается в том, что функция call() принимает список аргументов, в то время, как функция apply() - одиночный массив аргументов.

https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

/* мин/макс числа в массиве */

var numbers = [5, 6, 2, 3, 7];

/* используем apply к Math.min/Math.max */

var max = Math.max.apply(null, numbers); /* Это эквивалентно Math.max(numbers[0], ...)

                                            или Math.max(5, 6, ...) */

var min = Math.min.apply(null, numbers);

https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

this.x = 9;

var module = {

  x: 81,

  getX: function() { return this.x; }

};

module.getX(); // 81

var getX = module.getX;

getX(); // 9, поскольку в этом случае this ссылается на глобальный объект

// создаём новую функцию с this, привязанным к module

var boundGetX = getX.bind(module);

boundGetX(); // 8