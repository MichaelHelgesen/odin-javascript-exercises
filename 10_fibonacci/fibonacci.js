const fibonacci = function(num) {
	if( num == 0){
		return 0;
	} else if (num < 0){
		return "OOPS";
	}
	let sum = 0;
	let x = 0;
	let y = 1;
	for(i = num; i > 0; i--){
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
