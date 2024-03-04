const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2; 
};

const sum = function(arr) {
	let sum = 0;
	arr.forEach(num => {
		sum += num
	});
	return sum;
};

const multiply = function(arr) {
	let sum = 1;
	arr.forEach(num => {
		sum *= num;
	});
	return sum;
};

const power = function(num1, num2) {
	let sum = 1;
	for(i = num2; i > 0; i--){
		sum *= num1
	}
	return sum;
};

const factorial = function(factor) {
	let sum = 1;
	for(i = 1; i <= factor; i++){
		sum *= i; 
	}
	return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
