var convertToCelsius = function (farenheitDegree) {
    var celsius = Math.round((farenheitDegree - 32) * 5 / 9 * 10) / 10;
    return celsius;
};
var convertToFahrenheit = function (celsiusDegree) {
    var farenheit = Math.round(((celsiusDegree * 9 / 5) + 32) * 10) / 10;
    return farenheit;
};
// Do not edit below this line
module.exports = {
    convertToCelsius: convertToCelsius,
    convertToFahrenheit: convertToFahrenheit
};
