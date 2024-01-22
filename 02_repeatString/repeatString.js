const repeatString = function (str, repeat) {
  if (repeat < 0) return "ERROR";
  let strRepeated = "";
  while (repeat !== 0) {
    strRepeated += str;
    repeat--;
  }
  return strRepeated;
};

// Do not edit below this line
module.exports = repeatString;
