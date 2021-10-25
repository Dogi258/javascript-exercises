const fibonacci = function (nth) {
  if (nth == 1 || nth == 2) {
    return 1;
  } else if (nth < 0) {
    return "OOPS";
  }

  let fibArr = [1, 1];
  for (let i = 2; i < nth; i++) {
    nextFib = fibArr[0] + fibArr[1];
    fibArr[0] = fibArr[1];
    fibArr[1] = nextFib;
  }
  return fibArr[1];
};

// Do not edit below this line
module.exports = fibonacci;
