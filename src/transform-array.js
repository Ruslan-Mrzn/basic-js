const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(/* arr */) {
  const arr = arguments[0]
  if(!Array.isArray(arr)) throw Error(`'arr' parameter must be an instance of the Array!`)
  const result = [...arr]
  let length = result.length
  for (let i = 0; i<result.length;) {
    if(result[i] == '--discard-next' && result[i+2] == '--double-prev') {
      result.splice(i, 3)
      continue
    }

    if(result[i] == '--discard-next' && result[i+2] == '--discard-prev') {
      result.splice(i, 3)
      continue
    }


    if(result[i] == '--double-next' && result[i+2] == '--double-prev') {
      result.splice(i, 3, result[i+1], result[i+1], result[i+1])
      i+=3
      continue
    }

    if(result[i] == '--discard-next' && result[i+1] != undefined) {
      result.splice(i, 2)
      continue
    }
    if(result[i] == '--discard-next' && result[i+1] == undefined) {
      result.splice(i, 1)
      continue
    }
    if(result[i] == '--discard-prev' && result[i-1] != undefined) {
      result.splice(i-1, 2)
      i--
      continue
    }
    if(result[i] == '--discard-prev' && result[i-1] == undefined) {
      result.splice(i, 1)
      continue
    }

    if(result[i] == '--double-next' && result[i+1] != undefined) {
      result.splice(i, 1, result[i+1])
      i+=2
      continue
    }
    if(result[i] == '--double-next' && result[i+1] == undefined) {
      result.splice(i, 1)
      continue
    }
    if(result[i] == '--double-prev' && result[i-1] != undefined) {
      result.splice(i, 1, result[i-1])
      i++
      continue
    }
    if(result[i] == '--double-prev' && result[i-1] == undefined) {
      result.splice(i, 1)
      continue
    }
    else {
      i++
      continue
    }
  }
  return result
}

module.exports = {
  transform
};
