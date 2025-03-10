const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([ *  [0, 1, '^^'], *  [0, '^^', 2], *  ['^^', 1, 2] * ]) => 3`
 *
 *///*************************решено */
 function countCats(matrix) {
  //throw new NotImplementedError('Not implemented');
  
  matrix = matrix.flat()
  let b = 0;
  for(i=0;i<matrix.length;i++){
    matrix[i] == '^^'?b = b + 1:0;
  }
return b;
}
module.exports = {
  countCats
};
