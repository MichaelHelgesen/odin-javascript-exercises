var sumAll = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var totalSum = 0;
    var minSum = args.sort()[0];
    var maxSum = args.sort()[1];
    if (minSum < 0 || typeof (minSum) != "number" || typeof (maxSum) != "number") {
        return "ERROR";
    }
    ;
    for (var i = minSum; i <= maxSum; i++) {
        totalSum += i;
    }
    return totalSum;
};
// Do not edit below this line
module.exports = sumAll;
