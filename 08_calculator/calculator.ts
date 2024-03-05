const add = function(num1: number, num2: number): number {
	return num1 + num2;
};

const subtract = function(num1: number, num2: number): number {
	return num1 - num2; 
};

const sum = function(arr: number[]) {
	let sum: number = 0;
	arr.forEach(num => {
		sum += num
	});
	return sum;
};

const multiply = function(arr: number[]): number {
	let sum: number = 1;
	arr.forEach(num => {
		sum *= num;
	});
	return sum;
};

const power = function(num1: number, num2: number): number {
	let sum: number = 1;
	for(let i = num2; i > 0; i--){
		sum *= num1
	}
	return sum;
};

const factorial = function(factor: number): number {
	let sum: number = 1;
	for(let i = 1; i <= factor; i++){
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
