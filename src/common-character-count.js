const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let commonCharacters = 0
  const firstLettersArray = s1.split('')
  const secondLettersArray = s2.split('')
  const getMap = (array) => {
    return array.reduce((acc, current) => {
      if(acc[current]) acc[current]++
      else acc[current] = 1
      return acc
    }, {})
  }
  const firstMap = getMap(firstLettersArray)
  const secondMap = getMap(secondLettersArray)


  for (let letter in firstMap) {
    if(secondMap.hasOwnProperty(letter)) commonCharacters += Math.min(firstMap[letter], secondMap[letter])
  }
  return commonCharacters
}

module.exports = {
  getCommonCharacterCount
};
