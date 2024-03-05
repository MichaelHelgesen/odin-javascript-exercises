const repeatString = function(word:string, num:number): string {
	let timesToRepeat: number = num - 1;
	let combinedString: string = "";
	if (num >= 0 ) {
		while (timesToRepeat >= 0) {
			combinedString += word;
			timesToRepeat--;
		};
		return combinedString;
	}
	return "ERROR";
};

// Do not edit below this line
module.exports = repeatString;
