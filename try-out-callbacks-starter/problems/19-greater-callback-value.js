/*******************************************************************************
Write a function `greaterCallbackValue` that accepts a value and two callbacks
as arguments. The function should pass the value to both callbacks and return the
result of the callback that is greater.

Examples:

let doubler = function (n) {
    return 2 * n;
}

let squarer = function (n) {
    return n * n;
}

console.log(greaterCallbackValue(5, doubler, squarer));     // 25
console.log(greaterCallbackValue(1, doubler, squarer));     // 2
console.log(greaterCallbackValue(9, Math.sqrt, doubler));   // 18
*******************************************************************************/

let greaterCallbackValue = function(value, callback1, callback2) {
    let value1 = callback1(value);
    let value2 = callback2(value);
    if(value1 > value2){
        return value1
    }else{
        return value2
    }
};





/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = greaterCallbackValue;
