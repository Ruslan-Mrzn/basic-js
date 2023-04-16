const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const lettersArray = str.split('')
  const result = []
  for (let i = 0; i < lettersArray.length; i++) {
    const chunk = [1, lettersArray[i]]
    let repetitions = 1
    while(lettersArray[i] == lettersArray[i+repetitions]) {
      chunk[0]++
      repetitions++
    }
    result.push(chunk)
    i += repetitions - 1
  }
  let string = ''
  result.forEach(chunk => {
    if(chunk[0] == 1) string += `${chunk[1]}`
    else string += `${chunk[0]}${chunk[1]}`
  })
  return string
}

module.exports = {
  encodeLine
};
