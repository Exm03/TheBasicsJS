//задача 1
let password = 'пароль';
let userPassword = prompt('введите пороль');
if (password == userPassword) {
    alert("верно");
} else {
    alert("неправильно");
}
// Задание 2
let c = 2;
if (c > 0 && c < 10) {
    alert('Верно');
} else {
    alert('Неверно');
}
// Задание 3
let d = 50;
let e = 300;
if (d > 100 || e > 100) {
    alert('Верно');
} else {
    alert('Неверно');
}
//  Задание 4
function mult(figure) {
    let quad = (figure ** 2);
    console.log(quad);
}
mult(4)
// Задание 5
function age() {
   let userAge = Number(prompt('Сколько вам лет?'));
    if (userAge < 0) {
        alert("Вы ввели неправильное значение");
    } else if (userAge >= 0 && userAge < 13) {
        alert("Привет, друг!");
    } else {
        alert("Добро пожаловать!");
    }
}
age();
//  Задание 7
function evenOdd(number) {
    let check = (number % 2)
    if (check == 0) {
        alert(`Число ${number} четное`);
    } else {
        alert(`Число ${number} нечетное`);
    }
}
evenOdd(Number(prompt(`Укажите число`)));