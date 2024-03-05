const fibonacci = function(num: number): (number | string) {
	if( num == 0){
		return 0;
	} else if (num < 0){
		return "OOPS";
	}
	let sum: number = 0;
	let x: number = 0;
	let y: number = 1;
	for(let i = num; i > 0; i--){
		if(i == num){
			sum = y;
		} else {
			sum = y + x;
			x = y;
			y = sum;
		}
	}
	return sum;
};
// Do not edit below this line
module.exports = fibonacci;
