const sumAll = function(...args: (number)[]): (number | string) {
	let totalSum: number = 0;
	const minSum = args.sort()[0];
	const maxSum = args.sort()[1];
	if(minSum < 0 || typeof(minSum) != "number" || typeof(maxSum) != "number"){
		return "ERROR";
	};
	for(let i = minSum; i <= maxSum; i++) {
		totalSum += i;
	}
	return totalSum;
};
// Do not edit below this line
module.exports = sumAll;
