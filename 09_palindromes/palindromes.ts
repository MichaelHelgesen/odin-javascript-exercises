const palindromes = function (word: string): boolean {
	const wordClean: string = word.replace(/[^A-Za-z0-9]/g,'').toUpperCase();
	const wordInReverse: string = wordClean.split("").reverse().join("");
	for(let i = wordClean.length - 1; i >= 0; i--){
		if(wordClean.charAt(i) != wordInReverse.charAt(i)){
			return false;
		}
	}
	return true;
};

// Do not edit below this line
module.exports = palindromes;
