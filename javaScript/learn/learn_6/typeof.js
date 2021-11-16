// простые
typeof 1; // number
typeof 'adc'; // string
typeof false; // boolean
typeof 123n; // bigint
typeof Symbol(); // symbol

typeof {}; // object
typeof []; // object
typeof function() {}; // fucntion

// нулевые
typeof undefined; // undefined
typeof null; // object

// расхождения typeof и системы типов
typeof null; // object, хотя реальный тип значения - null
typeof function() {}; // function, хотя в системе типов функция не выделяется в отдельный тип 

function getStringValue(unknown) {
    if (typeof unknown === 'string') {
        return unknown;
    }
    if (typeof unknown === 'function') {
        return unknown();
    }
    if (typeof unknown === 'object') {
        return unknown.toString();
    }
    return ''; 
}
