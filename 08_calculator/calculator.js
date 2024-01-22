const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((acc, val) => (acc += val), 0);
};

const multiply = function (nums) {
  return nums.reduce((acc, val) => acc * val);
};

const power = function (a, b) {
  let result = 1;
  while (b !== 0) {
    result *= a;
    b--;
  }

  return result;
};

const factorial = function (a) {
  if (a === 0) return 1;
  return a * factorial(a - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
