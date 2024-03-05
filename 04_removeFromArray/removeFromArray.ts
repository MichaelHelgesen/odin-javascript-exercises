const removeFromArray = function(array:(number | string)[], ...elementsToRemove: (string | number)[]): (number | string)[] {
	return array.filter(element => !elementsToRemove.includes(element));
};
// Do not edit below this line
module.exports = removeFromArray;
