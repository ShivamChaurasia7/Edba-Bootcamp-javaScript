//simple function
function aSimpleFunction(){
    console.log("Simple Function");
}

aSimpleFunction(); //to print simple function


//immediately invoked function expression(IIFE)
var add2numbers = (function(){
    return function(n1,n2){
    return n1+n2;
};
})();


//function Array
var fArray = [
    function(a, b) { return a + b; },
    function(a, b) { return a * b; }
];


//es5
const addition = function () {
    let sum = 0;
    for (value in arguments) {
        sum += arguments[value];
    }
    return sum;
}

console.log(addition(2, 4, 3, 8)); //To print es5


//es6
const subtraction = (...args) => {
    let sum = 0;
    for (const value of args) {
        sum -= value;
    }
    return sum;
}

console.log(subtraction(1, 2, 3, 4)); //To print es6


//Rest parameters
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}