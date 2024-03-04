const palindromes = function (word) {
	const wordClean = word.replace(/[^A-Za-z0-9]/g,'').toUpperCase();
	const wordInReverse = wordClean.split("").reverse().join("");
	for(i = wordClean.length - 1; i >= 0; i--){
		if(wordClean.charAt(i) != wordInReverse.charAt(i)){
			return false;
		}
	}
	return true;
};

// Do not edit below this line
module.exports = palindromes;
