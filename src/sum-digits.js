const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 *//***************************решено */
function getSumOfDigits(n) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
    let b = 0
  c = 0
  let a = n.toString().split('')
   for(i=0;i<a.length;i++){
   b = b + a[i]*1
     }
  let r = b.toString().split('')
  for(i=0;i<r.length;i++){
   c = c + r[i]*1
  }
  return c

}

module.exports = {
  getSumOfDigits
};
