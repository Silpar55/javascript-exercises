const fibonacci = function (index) {
  // Do the sequence until the index given
  let count = index;
  if (typeof index !== "number") count = parseInt(count);
  if (count < 0) return "OOPS";
  if (count === 0) return 0;

  const fibonacciSeq = new Array();
  for (let i = 0; i < count; i++) {
    if (i === 0 || i === 1) {
      fibonacciSeq.push(1);
    } else {
      fibonacciSeq.push(fibonacciSeq[i - 1] + fibonacciSeq[i - 2]);
    }
  }

  return fibonacciSeq[count - 1];
};

// Do not edit below this line
module.exports = fibonacci;
