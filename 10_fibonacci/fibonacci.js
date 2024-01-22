const fibonacci = function (index) {
  // Do the sequence until the index given
  const fibonacciSeq = new Array();
  for (let i = 0; i < index; i++) {
    if (i === 0 || i === 1) {
      fibonacciSeq.push(1);
    } else {
      fibonacciSeq.push(fibonacciSeq[i - 1] + fibonacciSeq[i - 2]);
    }
  }

  return fibonacciSeq[index - 1];
};

// Do not edit below this line
module.exports = fibonacci;
