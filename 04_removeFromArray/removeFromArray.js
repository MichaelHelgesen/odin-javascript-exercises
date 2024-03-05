var removeFromArray = function (array) {
    var elementsToRemove = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        elementsToRemove[_i - 1] = arguments[_i];
    }
    return array.filter(function (element) { return !elementsToRemove.includes(element); });
};
// Do not edit below this line
module.exports = removeFromArray;
