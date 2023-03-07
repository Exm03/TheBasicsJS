// #1
function capitalized (text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}
console.log(capitalized ("привет Мир!"));
console.log(capitalized ("Как у Вас ДелА?"));

// #2
function removeSpace (string) {
    return string.replace(/ +/g, ' ').replace(/\ +([.,!":])/g, "$1").trim();
}
console.log(removeSpace ("Мне нравится     JavaScript!"));
console.log(removeSpace ("очЕнь  скоро       я    буДу Web-РазраБотчиком  !"));

// #3
function getSortedArray (arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (typeof arr[i] !== "number") {
            arr.splice(i, 1);
        }
    }
    arr.sort((a, b) => b - a);
    return arr
}
console.log(getSortedArray ([3, null, '0', 9, 12, 'a', false, -5]));
console.log(getSortedArray (['3', null, '0', 'a', '5', false]));

// #4
const getResult = (arr, callback) => {
	return callback(arr);
  }
    function sum(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }
    function mult(arr) {
        let total = 1;
        for (let i = 0; i < arr.length; i++) {
            total *= arr[i];
        }
        return total;
    }
console.log (getResult ([3, 4, 1, 9], mult));
console.log (getResult ([3, 4, 1, 9], sum));

// #5
let users = [{name: 'Jon', age: 22}, {name: 'Richard', age: 18}, {name: 'Anton', age: 32}, {name: 'Lida', age: 23}, {name: 'Bob', age: 44}];
users.sort((prev, next) => prev.age - next.age);
console.log (users);

// #6
let arr = []
function forTo(a, b) {

if (a <= b) {
    if (a - b === 0) {
        return [a];
       } else {
        const numbers = forTo(a + 1, b);    
        numbers.unshift(a);
        return numbers;
       }
} else {
    const numbers = forTo(b + 1, a);    
    numbers.unshift(b);
    return numbers.reverse(b);
}
}
console.log(forTo(4,9));
console.log(forTo(3, -3));
console.log(forTo(5, 5));
console.log(forTo(100, 30));