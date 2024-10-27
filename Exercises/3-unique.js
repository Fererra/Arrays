'use strict';

// Create and return a new array without duplicate elements
// Don't modify initial array

const unique = (array) => {
  const result = [];
  for (const elem of array) {
    if (!result.includes(elem)) {
      result.push(elem);
    }
  }
  return result;
};

module.exports = { unique };
