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
 
/**********************решено */

  let a = n.toString().split('');
    let b = 0;
  if(a.length == 2){return Math.max(a[0]*1,a[1]*1)}
   for(let i = 0;i<a.length-1;i++){
      if(a[i] < a[i+1]){
       b = a[i]
     }
   }
    for(let i = 0;i<a.length-1;i++){
  if(b == a[i]){
    a.splice(i,1)
  }
  }
  return a.join('')*1
}

module.exports = {
  deleteDigit
};
