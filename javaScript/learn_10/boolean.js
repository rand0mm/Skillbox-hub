function hasSomething (value) {
    // switch (typeof value) {
    //     // для boolean возвращаем значение как есть
    //     case 'boolean': return value;
    //     // для чисел проверяем значение на 0
    //     case 'nubmer': return value !==0; 
    //     // для строк проверяем, что значение - непустая строка
    //     case 'string': return value !== ''; 
    //     // вспоминаем, что typeof null - object, так что тут явно проверим на null
    //     case 'object': return value !== null;
    //     // функция тоже объект, хоть и с особым typeof, а для объектов всегда возвращаем true
    //     case 'function': return true; 
    //     // для undefined нечего проверять, оно всегда пустое
    //     case 'undefined': return false;
    // }

    //return Boolean(value); // тоже самое что и свитч выше
    return !!value; // еще короче
}

function isEmpty(value) {
    return !value;
}

