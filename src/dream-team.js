const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(/* members */) {
  const members = arguments[0]
  if(!members) return false
  if(!members.length) return false
  if(members.every(member=> typeof member != 'string')) return false
  let teamName = ''
  members.forEach(member => {
    if(typeof member == 'string') {
      const chunk = member.trimStart()[0].toUpperCase()
      teamName += chunk
    }
  })
  return teamName.split('').sort().join('')
}

module.exports = {
  createDreamTeam
};
