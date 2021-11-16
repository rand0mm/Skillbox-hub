// obj1 и obj2 - ссылки на один и тот же объект...
let obj1 = { name: 'Какой то объект' };
let obj2 = obj1;

// ...и они равны
console.log(obj1 === obj2);

// obj2 становится ссылкой на новый объект, хоть и с такими же свойствами
obj2 = { name: 'Какой то объект' };

//и теперь obj1 и obj2 - ссылки на разные объекты, то есть они не равны
console.log(obj1 === obj2);