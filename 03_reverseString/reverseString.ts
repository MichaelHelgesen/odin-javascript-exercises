const reverseString = function(sentence): string {
	let reversedSentence: string  = "";

	for(let i = sentence.length - 1; i >= 0; i--) {
		reversedSentence += sentence[i];
	}

	return reversedSentence;
};

// Do not edit below this line
module.exports = reverseString;
