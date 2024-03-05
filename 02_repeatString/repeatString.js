var repeatString = function (word, num) {
    var timesToRepeat = num - 1;
    var combinedString = "";
    if (num >= 0) {
        while (timesToRepeat >= 0) {
            combinedString += word;
            timesToRepeat--;
        }
        ;
        return combinedString;
    }
    return "ERROR";
};
// Do not edit below this line
module.exports = repeatString;
