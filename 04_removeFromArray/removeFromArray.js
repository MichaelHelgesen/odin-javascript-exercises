const removeFromArray = function(array, ...elementsToRemove) {
	return array.filter(element => !elementsToRemove.includes(element));
};

removeFromArray([1,2], 1,3);
// Do not edit below this line
module.exports = removeFromArray;
