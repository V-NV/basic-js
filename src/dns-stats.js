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
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  a = ['code.yandex.ru', 'music.yandex.ru', 'yandex.ru']
  let first,telo,last = ''
  let arr =[]
  let arr2 =[]
  for(i=0;i<a.length;i++){
   arr.push(a[i].split('.'))
    }
  
  arr = arr.flat()
  //arr2 = arr.sort()
  //let obj = Object.assign({}, arr2);
  
  console.log(arr)
  //console.log(arr2)
  //console.log(obj)


}

module.exports = {
  getDNSStats
};
