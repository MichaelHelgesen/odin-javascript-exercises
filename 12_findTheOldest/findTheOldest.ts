const findTheOldest = function(array: object[]): object {
	let oldestPerson: object = {};
	const currentYear: number =  new Date().getFullYear();
	const findOldestAge: number = array.reduce(function(oldest: number, currentPerson: object): number {
		let age: number = currentPerson["yearOfDeath"] - currentPerson["yearOfBirth"] || currentYear - currentPerson["yearOfBirth"];
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
