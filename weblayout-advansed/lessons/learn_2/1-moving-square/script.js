/*//начало ролика
var box = document.querySelector('.box');
var i = 0;
//можно без window.
window.setInterval(function() {
    box.setAttribute('style', 'transform: translateX('+ i + 'px);');
    i = i + 1;
}, 20) */

//продолжение ролика
var box = document.querySelector('.box');
var i = 0;
var interval = setInterval(function() {
    box.setAttribute('style', 'transform: translateX('+ i + 'px);');
    i = i + 1;
}, 20)
//остановка функции через 10 сек, setTimeout - метод остановки через 1 сек, 
// clearInterval остановка setInterval
setTimeout(function() {
    clearInterval(interval)
}, 10000)