const palindromes = function (word) {
	const wordClean = word.replace(/[^A-Za-z0-9]/g,'').toUpperCase();
	const wordToArray = wordClean.split("");
	const wordLength = wordToArray.length;
	for(i = wordLength - 1; i >= 0; i--){
		if(wordClean[i] != wordClean[(wordLength - 1) - i]){
			return false;
		}
	}
	return true;
};
// Do not edit below this line
module.exports = palindromes;
