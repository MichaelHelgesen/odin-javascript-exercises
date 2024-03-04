const convertToCelsius = function(farenheitDegree) {
	const celsius = Math.round((farenheitDegree - 32) * 5 / 9 * 10) / 10;
	return celsius;
};

const convertToFahrenheit = function(celsiusDegree) {
	const farenheit = Math.round(((celsiusDegree * 9/5 ) + 32) * 10 ) / 10;
	return farenheit;
};


console.log(convertToCelsius(-100));


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
