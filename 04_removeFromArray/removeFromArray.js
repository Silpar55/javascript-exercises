const removeFromArray = function (arr, ...args) {
  const newArr = arr;
  args.forEach(function (arg) {
    while (newArr.indexOf(arg) > -1) newArr.splice(arr.indexOf(arg), 1);
  });

  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
