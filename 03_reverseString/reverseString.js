var reverseString = function (sentence) {
    var reversedSentence = "";
    for (var i = sentence.length - 1; i >= 0; i--) {
        reversedSentence += sentence[i];
    }
    return reversedSentence;
};
// Do not edit below this line
module.exports = reverseString;
