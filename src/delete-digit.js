const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const stringArray = `${n}`.split('')
  const numberArray = stringArray.map(num => +num)
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] < numberArray[i+1] && numberArray[i+1] != undefined) {
      numberArray.splice(i,1)
      break
    }
    if (numberArray[i] >= numberArray[i+1] && numberArray[i+2] == undefined) {
      numberArray.splice(i+1,1)
      break
    }
  }
  return Number(numberArray.join(''))
}

module.exports = {
  deleteDigit
};
