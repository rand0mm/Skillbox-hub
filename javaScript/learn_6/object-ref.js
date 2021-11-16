let digit = 20;
let otherDigit = digit;

// исходное значение не меняется, так как otherDigit копирует значание digit
otherDigit += 5;

let obj = {model: 'VW Polo'};
let otherObj = obj;

// obj и otherObj ссылаются на один объект, поэтому свойство меняется и там и там
otherObj.model = 'volkswagen Polo';

