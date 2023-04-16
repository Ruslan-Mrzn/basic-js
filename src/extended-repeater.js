const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let resultString = ''
  
  let {
    repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator
  } = options
  if(!separator) separator = '+'
  if(!additionSeparator) additionSeparator = '|'
  let string = `${str}`
  const repeatChunk = []
  const chunk = []
  let repeatString = string

  if(!additionRepeatTimes && addition) chunk.push(addition)

  addition = `${addition}`
  
  while(additionRepeatTimes) {
    chunk.push(addition)
    additionRepeatTimes--
  }
  repeatString = string + chunk.join(`${additionSeparator}`)

  if(!repeatTimes) repeatChunk.push(repeatString)

  while(repeatTimes) {
    repeatChunk.push(repeatString)
    repeatTimes--
  }

  resultString = repeatChunk.join(`${separator}`)

  return resultString
}

module.exports = {
  repeater
};
