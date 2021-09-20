const ftoc = function (temp) {
  let tempConversion = (temp - 32) * (5 / 9);

  // Check to see if temperature is a whole number
  if (tempConversion % 1 != 0) {
    return parseFloat(tempConversion.toFixed(1));
  } else {
    return tempConversion;
  }
};

const ctof = function (temp) {
  let tempConversion = temp * (9 / 5) + 32;
  if (tempConversion % 1 != 0) {
    return parseFloat(tempConversion.toFixed(1));
  } else {
    return tempConversion;
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
