var palindromes = function (word) {
    var wordClean = word.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
    var wordInReverse = wordClean.split("").reverse().join("");
    for (var i = wordClean.length - 1; i >= 0; i--) {
        if (wordClean.charAt(i) != wordInReverse.charAt(i)) {
            return false;
        }
    }
    return true;
};
// Do not edit below this line
module.exports = palindromes;
