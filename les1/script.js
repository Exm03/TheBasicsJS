// Задача 1
let a = Number("10");
alert(a)
a = Number("20");
alert(a);
// задача 2
const firstIphone = Number("2007");
alert(firstIphone);
// Задача 3
const JsCreator = String("Brandan Eich");
alert(JsCreator);
// Задача 4
a = Number("10");
let b = Number("2");
let amount = (a+b);
let difference = (a-b);
let multiply = (a*b);
let splitting = (a/b);
alert(`Сумма ${amount}\n Разность ${difference}\n Произведение ${multiply}\n Частное ${splitting}`)
// Задача 5
a = prompt("Введите первое число");
b = prompt("Введите второе число");
a = Number(a);
b = Number(b);
alert(`Сумма ваших чисел составляет ${a+b}`);
// Задача 6
a = Number("2");
b = Number("5");
const result = (a**b);
alert(result);
// Задача 7
a = Number("9");
b = Number("2")
alert(a%b)
// Задача 8
a = Number('2');
b = Number('3');
alert(a + b);
// Задача 9
a = String(1);
b = String(2);
alert(a+b);
// Задача 10
a = '5';
b = '6';
alert(parseInt(a) + parseInt(b) + "px");
// Задача 11
let age = prompt("Сколько вам лет?");
age = Number(age);
alert(++age);
// Задача 12
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num = ++num;
num = --num;
alert(num);
// Задача 13
let userName = prompt("Укажите ваше имя");
alert(`Привет, ${userName}!`);
// Задача 14
let salary = prompt("Укажите вашу зарплату");
salary = Number(salary);
let percent = Number("20");
let prize = Number(salary/100*percent);
let fullSalary = Number(salary+prize);
percent = Number(13);
let tax =Number(fullSalary/100*percent);
let salaryAfterTax = Number(fullSalary-tax);
let days = prompt("укажите колличество дней в месяце")
days = Number(days)
let moneyPreDay = Number(salaryAfterTax/days);
alert(`Ваша премия составляет:${prize}\n Подоходный налог:${tax}\n Доход за вычетом налогов:${salaryAfterTax}\n Бюджет на день:${moneyPreDay}`)