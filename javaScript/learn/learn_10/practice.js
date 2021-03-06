parseEmployeesData(`
Тиунов Тимофей  Сергеевич,  системный архитектор
Иванов Иван Иванович , frontend-разработчик 
`);

function parseEmployeesData(dataString) {
    return dataString
        // разбиваем текст по строкам (то есть по переносам строки)
        .split('\n')
        // убираем пустые строки и строки с пробелами
        .filter(line => line.trim().length > 0)
        // преобразуем каждую строку
        .map(line => {
            // через запятую выписаны ФИО и должность человека
            const [fullName, occupation] = line
                // разбиваем строку по запятой
                .split(',')
                // убираем лишние пробелы (после и перед запятой)
                .map(str => str.trim())
                // убираем из всего массива пустые строки, которые могут появиться
                // если в тексте есть несколько пробелов подряд в результате ручного ввода
                .filter(text => text.length > 0);
            // далее нам нужно разбить ФИО на состовляющие
            const [surname, name, middleName] = fullName
                // ФИО в тесте написаны через пробел, так что разбиваем по пробелу
                .split(' ')
                // и тоже убираем лишнее
                .filter(text => text.length > 0);
            // возвращаем объект со структурированными данными
            return {
                surname, name, middleName, occupation
            };
        })
}

console.log(parseEmployeesData(`
Тиунов Тимофей Сергеевич, системный архитектор
Иванов Иван Иванович, frontend-разработчик
`))