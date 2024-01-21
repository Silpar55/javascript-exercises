const sumAll = function (a, b) {
  // we need to know what is the bigger number
  let greaterNum = 0;
  let lessNum = 0;
  let sum = 0;

  if (a > b) {
    greaterNum = a;
    lessNum = b;
  } else {
    greaterNum = b;
    lessNum = a;
  }

  // Sum the range until the greaterNum reach the less number
  while (greaterNum !== lessNum) {
    sum += greaterNum;
    greaterNum--;
  }

  // when it reach the less number it does not sum the reached number, we need to add it too
  sum += lessNum;

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
