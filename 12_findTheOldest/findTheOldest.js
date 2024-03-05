var findTheOldest = function (array) {
    var oldestPerson = {};
    var currentYear = new Date().getFullYear();
    var findOldestAge = array.reduce(function (oldest, currentPerson) {
        var age = currentPerson["yearOfDeath"] - currentPerson["yearOfBirth"] || currentYear - currentPerson["yearOfBirth"];
        if (age > oldest) {
            oldest = age;
            oldestPerson = currentPerson;
        }
        return oldest;
    }, 0);
    return oldestPerson;
};
// Do not edit below this line
module.exports = findTheOldest;
