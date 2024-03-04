const repeatString = function(string, num) {
	let timesToRepeat = num - 1;
	let combinedString = "";
	if (num >= 0 ) {
		while (timesToRepeat >= 0) {
			combinedString += string;
			timesToRepeat--;
		};
		return combinedString;
	}
	return "ERROR";
};

// Do not edit below this line
module.exports = repeatString;
