const convertToCelsius = function (num) {
  // FORMULA
  // (ºF - 32) / 1.8
  return Math.round((num - 32) / 1.8) / 10;
};

const convertToFahrenheit = function (num) {
  // FORMULA
  // (ºC * 1.8) + 32
  return Math.round(num * 1.8 + 32) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
