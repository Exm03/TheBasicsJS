// #1
const rectangle = {
    width: 6,
    height: 5,
    getSquare: "",
    searchS (){
        this.getSquare = this.width * this.height
    },
};

// #2
const price = {
    price: 10,
    discount: 15,
    getPrice (){
        return this.price
    },
    getPriceWithDiscount (){
        return this.price - this.discount/100 *this.price
    },
};

 

console.log(price.getPrice ());
console.log(price.getPriceWithDiscount ());

// #3
let sizes = {
    width: 5,
    height: 10
},

getSquare = function () {
    return this.width * this.height
};
console.log (getSquare.call(sizes))

// #4
let f = function() {
    let num = 0;
    return function() {
        num++;
        return num;
    }
}
    let func = f();
    console.log(func());
    console.log(func());
    console.log(func());
    console.log(func());

// #5
function sum(a) {
  let currentSum = a;
  function f(c) {
    currentSum += c;
    return f
  }
  f.toString = function () {
    return currentSum;
  };
  return f;
}
let x = sum(2)(5)(10)(-10)(15);
alert(x);
console.log( Number (x));