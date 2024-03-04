const sumAll = function(...args) {
	let totalSum = 0;
	const minSum = args.sort()[0];
	const maxSum = args.sort()[1];
	if(minSum < 0 || typeof(minSum) != "number" || typeof(maxSum) != "number"){
		return "ERROR";
	};
	for(i = minSum; i <= maxSum; i++) {
		totalSum += i;
	}
	return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
