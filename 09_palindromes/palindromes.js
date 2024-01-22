const palindromes = function (str) {
  const original = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reverse = original.split("").reverse().join("");
  return original === reverse;
};

// Do not edit below this line
module.exports = palindromes;
