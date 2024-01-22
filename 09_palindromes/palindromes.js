const palindromes = function (str) {
  const original = str;
  const reverse = str.split("").reverse();
  let isPalindrome = true;

  for (let i = 0; i < str.length && isPalindrome; i++) {
    if (original[i] !== reverse[i]) isPalindrome = false;
  }

  return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
