const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  if (array.length == 0) {
    return 0;
  }
  return array.reduce((sum, num) => sum + num);
};

const multiply = function (array) {
  if (array.length == 0) {
    return 0;
  }
  return array.reduce((product, num) => product * num);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (num) {
  let result = 1;
  for (let index = 1; index <= num; index++) {
    result *= index;
  }
  return result;
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
