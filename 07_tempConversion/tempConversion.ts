const convertToCelsius = function(farenheitDegree: number): number {
	const celsius: number = Math.round((farenheitDegree - 32) * 5 / 9 * 10) / 10;
	return celsius;
};

const convertToFahrenheit = function(celsiusDegree: number): number {
	const farenheit: number = Math.round(((celsiusDegree * 9/5 ) + 32) * 10 ) / 10;
	return farenheit;
};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
