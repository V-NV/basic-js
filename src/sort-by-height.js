const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  
  /**************решено */

  let a = arr.slice();
  let b =[]
  let c = []
  for(i=0;i<a.length;i++){
    if(a[i] !== -1){
    b.push(a[i])
    }
  }
  let sorti = b.sort(function(a, b){return a - b;});
  for(i=0;i<a.length;i++){
      if(arr[i] == -1){
       sorti.splice(i, 0,-1)
     }
        }
  arr = sorti.slice()
    return arr
}

module.exports = {
  sortByHeight
};
