const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  return domains.reduce((acc, domain, index) => {
    const stats = domain.split('.').reverse()
    let key = ''
    stats.forEach(dns => {
      key += `.${dns}`
      if(acc[key]) {
        for(let i = index; i < domains.length; i++) {
          if(domains[i].includes(`${key}`) || domains[i].includes(`${dns}.`)) acc[key]++
        }
      }
      else acc[key] = 1
    })
    return acc
  }, {})
}

module.exports = {
  getDNSStats
};
