const sumAll = function (num1, num2) {
  // Check for negatives and non numbers
  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }
  if (isNaN(num1) || isNaN(num2)) {
    return "ERROR";
  } else if (!(Number.isInteger(num1) || Number.isInteger(num2))) {
    return "ERROR";
  }

  // switch num1 and num2 if num2 if num 1 is greater
  if (num1 > num2) {
    temp = num1;
    num1 = num2;
    num2 = temp;
  }

  let sum = 0;
  for (let i = num1; i <= num2; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
