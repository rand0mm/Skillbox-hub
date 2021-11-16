function getPageLinkDomains() {
    // Array.from создаёт массив из массивоподобных структур. getElementsByTagName
    // как раз вернёт структуру, которая похожа на массив, но не является
    // полноценными массивом, то есть не имеет тех самых методов массива, о котороых
    // мы говорим. Array.from как раз решает эту проблему.
    let arr = Array.from(document.getElementsByTagName('a'))
    return arr
    // взяты только ссылки на домены
        .filter(link => 
                    link.href.startsWith('http://') || 
                    link.href.startsWith('https://')
                )
        .map(link => link.href
                // убираем протокол (http://, https://)
                .replace('http://', '')
                .replace('https://', '')
                // убираем www теперь в начале остался только домен
                .replace('www.', '')
                // делим оставшуюся часть по слэшу, чтобы отделить домен от остальной
                // части ссылки
                .split('/')
                // забираем первый элемент получившегося массива, то есть домен
                .shift()
            )
        // А теперь с помощью reduce составляем новый массив с уникальными доменами
        .reduce((uniqueDomains, domain) => {
            // возвращаем массив без изменений, если в нём уже есть этот домен
            if (uniqueDomains.includes(domain)) return uniqueDomains;
            // в противном случае возвращаем новый массив с добавленным в него домено
            return [...uniqueDomains, domain];
        })
}

console.log(getPageLinkDomains());
