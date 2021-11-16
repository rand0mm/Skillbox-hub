function alert(e) {
    console.log(e);
}
// у нас есть массив с именем и фамилией
let arr = ["Ilya", "Kantor"]

// деструктурирующее присваивание
// записывает firstName=arr[0], surname=arr[1]
// let [firstName, surname] = arr;
// либо:
let [firstName, surname] = "Ilya Kantor".split(' ');
alert(firstName); // Ilya
alert(surname);  // Kantor

let [firstNameС, , titlea] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert( titlea ); // Consul

// любые объекты
let [a, b, c] = "abc";
let [one, two, three] = new Set([1, 2, 3]);

let user = {};
[user.name, user.surname] = "Ilya Kantor".split(' ');

alert(user.name); // Ilya

let usera = {
    name: "John",
    age: 30
  };
  
  // цикл по ключам и значениям
  for (let [key, value] of Object.entries(usera)) {
    alert(`${key}:${value}`); // name:John, затем age:30
  }

  let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert(name1); // Julius
alert(name2); // Caesar

// Обратите внимание, что `rest` является массивом.
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2

// значения по умолчанию
let [nameZ = "Guest", surnameZ = "Anonymous"] = ["Julius"];

alert(nameZ);    // Julius (из массива)
alert(surnameZ); // Anonymous (значение по умолчанию)


let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  
let {title, width, height} = options;
  
  alert(title);  // Menu
  alert(width);  // 100
  alert(height); // 200

//   let options = {
//     title: "Menu"
//   };
  
//   let {width = 100, height = 200, title} = options;
  
//   alert(title);  // Menu
//   alert(width);  // 100
//   alert(height); // 200

// остаток объекта
// let options = {
//     title: "Menu",
//     height: 200,
//     width: 100
//   };
  
//   // title = свойство с именем title
//   // rest = объект с остальными свойствами
//   let {title, ...rest} = options;
  
//   // сейчас title="Menu", rest={height: 200, width: 100}
//   alert(rest.height);  // 200
//   alert(rest.width);   // 100

// let options = {
//     size: {
//       width: 100,
//       height: 200
//     },
//     items: ["Cake", "Donut"],
//     extra: true
//   };
  
//   // деструктуризация разбита на несколько строк для ясности
//   let {
//     size: { // положим size сюда
//       width,
//       height
//     },
//     items: [item1, item2], // добавим элементы к items
//     title = "Menu" // отсутствует в объекте (используется значение по умолчанию)
//   } = options;
  
//   alert(title);  // Menu
//   alert(width);  // 100
//   alert(height); // 200
//   alert(item1);  // Cake
//   alert(item2);  // Donut


// мы передаём объект в функцию
let optionsa = {
    titlea: "My menu",
    itemsa: ["Item1", "Item2"]
  };
  
  // ...и она немедленно извлекает свойства в переменные
  function showMenu({titlea = "Untitled", widtha = 200, heighta = 100, itemsa = []}) {
    // title, items – взято из options,
    // width, height – используются значения по умолчанию
    alert( `${titlea} ${widtha} ${heighta}` ); // My Menu 200 100
    alert( itemsa); // Item1, Item2
  }
  
  showMenu(optionsa);

  let optionsb = {
    titleb: "My menu",
    itemsb: ["Item1", "Item2"]
  };
  
  function showMenub({
    titleb = "Untitled",
    widthb: w = 100,  // width присваиваем в w
    heightb: h = 200, // height присваиваем в h
    itemsb: [item1, item2] // первый элемент items присваивается в item1, второй в item2
  }) {
    alert( `${titleb} ${w} ${h}` ); // My Menu 100 200
    alert( item1 ); // Item1
    alert( item2 ); // Item2
  }
  
  showMenub(optionsb);

// showMenu({}); // ок, все значения - по умолчанию

// showMenu(); // так была бы ошибка

// Полный синтаксис для объекта:

// let {prop : varName = default, ...rest} = object
  