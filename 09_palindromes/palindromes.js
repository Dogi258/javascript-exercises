const palindromes = function (str) {
  str = str.toLowerCase().replace(/[^A-Za-z]/g, "");

  leftIndex = 0;
  rightIndex = str.length - 1;
  while (leftIndex < rightIndex) {
    if (str[leftIndex] != str[rightIndex]) {
      return false;
    }
    leftIndex++;
    rightIndex--;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
