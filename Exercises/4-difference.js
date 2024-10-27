'use strict';

// Find difference of two arrays
// elements from array1 that are not includes in array2

const difference = (array1, array2) => {
  const result = [];
  for (const elem of array1) {
    if (!array2.includes(elem)) {
      result.push(elem);
    }
  }
  return result;
};

module.exports = { difference };
