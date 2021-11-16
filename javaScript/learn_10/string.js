String(true); // 'true'
String(false); // 'false'

String(42); // '42'
String(3.14); // '3.14'

String(null); // 'null'
String(undefined); // 'undefined'

String({}); // '[ object Object]'
String({
    toString() {
        return 'Вот что будет если преобразовать меня в строку' 
    }
}); // 'Вот что будет если преобразовать меня в строку' 

String ([
    true,
    false,
    1,
    1.1,
    'строка',
    {},
    { toString () { return 'Переопределяем toString()'} },
    null,
    undefined
]); // 'true,false,1,1.1,строка,[object Object], Переопределяем toString()??'