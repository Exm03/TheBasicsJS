//задача 1
let str = 'abcde';
alert(str[0]);
alert(str[1]);
alert(str[4]);
// Задача 2
var num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num = num ++;
num = num --;
alert (num);
// Задача 3
let a = 17;
let b = 10;
let c = a - b;
let d = 7;
let result = c + d;
alert(result)
// Задача 4
let name = prompt("Введите ваше имя");
alert(`Ваше имя ${name}`)
// Задача 5
let number = Number(prompt("Введите число"));
alert(number**2)
// Задача 6
let secInDays = function (days) {
    return `В ${days} днях ${days*24*60*60} секунд`
}
alert(secInDays(prompt("Введите колличество дней")))
// Задача 7
let week = { 1: 'Понедельник', 2: 'Вторник', 3: 'Среда', 4: 'Четверг', 5: 'Пятница', 6: 'Суббота', 7: 'Воскресенье'}
for (let key in week) {
    alert(`${key} это ${week[key]}`);
}
// Задача 8 
let min=Number(prompt("Введите число от 0 до 59"));
if (min >= 0 && min <= 14) {
alert ("Первая");
}
if (min >= 15 && min <= 30) {
alert ("Вторая");
}
if (min >= 31 && min <= 45) {
alert ("Третья");
}
if (min >= 46 && min <= 59) {
alert ("Четвертая");
}
if (min >= 60) {
alert ("Неверное значение")
}
// Задача 9
function check(str, char) {
const oneChar = str[0];
if (oneChar == char) {
alert("Да")
}else{
alert("Нет")
}
}
check("loram", "l");
check("loram", "o");
// Задача 10
let simb = function (enySymb) {
let lastSimb = enySymb[enySymb.length - 1];
let numOrSimb = (lastSimb % 2);
if (numOrSimb == 0) {
return alert("Четное")
} if (numOrSimb == 1) {
return alert("Нечетное")
} else {
return alert("Символ не является цифрой")
}
}
simb(prompt("Введите набор символов"));