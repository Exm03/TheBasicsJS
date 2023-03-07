// #1
let arr = [1, 5, 4, 10, 0, 3];
for (const item of arr) {
    if (item === 10) {
        console.log(item);
        break
    }
    console.log(item);
}

// #2
arr = [1, 5, 4, 10, 0, 3];
console.log(arr.indexOf(4));

// #3
arr = [1, 3, 5, 10, 20];
console.log(arr.join(' '));

// #4
arr = [];
let or = [];
    for (let i = 0; i < 10; i++) {
    let n = Math.round(Math.random()*10)
    arr.push(n)
    if (n % 2 === 0) {
        or.push(n)
    } else {
        continue
    }
}
console.log(arr);
console.log(or);

// #5
arr = [];
for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 3; j++) {
        arr[i].push(1);
    }
}
console.log(arr);

// #6
arr = [1, 1, 1];
arr.push(2, 2, 2);
console.log(arr);

// #7
arr = [9, 8, 7, 'a', 6, 5];
arr.sort();
arr.pop();
console.log(arr);

// #8
arr = [9, 8, 7, 6, 5];
let n = Number(prompt('Введите число от 1 до 10'));
let search = arr.includes(n);
console.log(search)

// #9
function string(str) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}
console.log(string('abcdef'));

// #10
 function none() {
    arr = [];
    for (let i = 0; i < 6; i++) {
        let n = Math.round(Math.random()*10);
        arr.push(n);
    }
    console.log(arr)
    let average = (arr) => {
      let sum = 0;
      for (let i = 0; i < arr.length; i += 1) {
        sum += arr[i];
      }
      return sum / arr.length;
    };
    
    console.log(average(arr));
 } none();

//  #11
arr = [[1, 2, 3,],[4, 5, 6]];
n = [].concat(arr[0], arr[1]);
console.log(n)

// #12
function none() {
    array = [];
    let string = Math.round(Math.random()*22);
    for (let i = 0; i < string; i++) {
        let l = Math.round(Math.random()*10);
        array.push(l);
    }
    string = string - 1;
    console.log(array)
    for (let i = 0; i < string - 1; i++) {
        let a = array[i];
        let b = array[i + 1];
        let num = a + b
        console.log(num)
    }
 } none();
 