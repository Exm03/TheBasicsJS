//задача 1
let arr = [];
console.log(arr);
let number = Number(prompt('Введите число'));
arr[arr.length] = number;
console.log(arr);
//задача 2
let i = 0;
while (i < 2) {
    console.log('Привет');
    i++
}
//задача 3
i = 1;
while (i <= 5) {
    console.log(i);
    i++
}
//задача 4
i = 7;
while (i <= 22) {
    console.log(i);
    i++
}
//задача 5
function roll(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}
console.log(roll(1, 10));
//задача 6
arr = [];
function fill(len) {
    for (let i = 1; i < len + 1; i++) {  
        if (i < len + 1) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(fill(Math.round(Math.random() * 99999)));
let sum = 0;
arr.forEach(item => {
    if (typeof item === 'number') {
        sum += item
    }
})
console.log(sum);
//задача 7
arr = [10, 27, 33, 67, 90, 235, 353, 987, 1000];
console.log(arr.reverse());