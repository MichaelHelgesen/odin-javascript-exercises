const getTheTitles = function(array) {
	return array.map((arrItem) => arrItem.title);
};
console.log(getTheTitles([
	{
		title: "Book",
		author: "Name"
	}
]))
// Do not edit below this line
module.exports = getTheTitles;
