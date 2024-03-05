const findTheOldest = function(array) {
	let oldestPerson = {};
	const currentYear =  new Date().getFullYear();
	const findOldestAge = array.reduce(function(oldest, currentPerson) {
		let age = currentPerson["yearOfDeath"] - currentPerson["yearOfBirth"] || currentYear - currentPerson["yearOfBirth"];
		if(age > oldest){
			oldest = age;
			oldestPerson = currentPerson;
		}
		return oldest;
	}, 0)
	return oldestPerson;
}
// Do not edit below this line
module.exports = findTheOldest;
