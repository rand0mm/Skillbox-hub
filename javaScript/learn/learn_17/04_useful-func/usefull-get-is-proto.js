const obj = new Array();

console.log(Object.getPrototypeOf(obj) === Array.prototype);
console.log(Array.prototype.isPrototypeOf(obj));
console.log(obj instanceof Array);
//проверка принадлежности к прототипу/класса
