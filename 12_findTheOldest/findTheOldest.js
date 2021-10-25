const findTheOldest = function (peopleArr) {
  return peopleArr.reduce((obj, currentPerson) => {
    // Get the current year
    const currentYear = new Date().getFullYear();

    // Get obj Age
    const currentPersonAge = currentPerson["yearOfDeath"]
      ? currentPerson.yearOfDeath - currentPerson.yearOfBirth
      : currentYear - currentPerson.yearOfBirth;

    // Get currentPersonAge
    const objAge = obj["yearOfDeath"]
      ? obj.yearOfDeath - obj.yearOfBirth
      : currentYear - obj.yearOfBirth;

    // Check to see who is older
    if (objAge < currentPersonAge) {
      obj = currentPerson;
    }

    // Return older person
    return obj;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
