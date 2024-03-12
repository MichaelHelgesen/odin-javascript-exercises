var add = function (num1, num2) {
    return num1 + num2;
};
var subtract = function (num1, num2) {
    return num1 - num2;
};
var sum = function (arr) {
    return arr.reduce(function (acc, curr) { return acc + curr; }, 0);
};
var multiply = function (arr) {
    return arr.reduce(function (acc, curr) { return acc * curr; }, 1);
};
var power = function (num1, num2) {
    var sum = 1;
    for (var i = num2; i > 0; i--) {
        sum *= num1;
    }
    return sum;
};
var factorial = function (factor) {
    var sum = 1;
    for (var i = 1; i <= factor; i++) {
        sum *= i;
    }
    return sum;
};
// Do not edit below this line
module.exports = {
    add: add,
    subtract: subtract,
    sum: sum,
    multiply: multiply,
    power: power,
    factorial: factorial
};
