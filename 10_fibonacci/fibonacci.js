var fibonacci = function (num) {
    if (num == 0) {
        return 0;
    }
    else if (num < 0) {
        return "OOPS";
    }
    var sum = 0;
    var x = 0;
    var y = 1;
    for (var i = num; i > 0; i--) {
        if (i == num) {
            sum = y;
        }
        else {
            sum = y + x;
            x = y;
            y = sum;
        }
    }
    return sum;
};
// Do not edit below this line
module.exports = fibonacci;
