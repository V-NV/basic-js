const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    
    let sum = 1;//cчетчик
  let b = function (vnutr) {// замыкание
     for (let i=0; i<vnutr.length; i++) {
      if (Array.isArray(vnutr[i])) {//проверка ячейки на вложенный массив 
       sum = sum + 1;
   b(vnutr[i])// замыкание
  } 
   // else {sum = sum + 1;}//если не массив тоже + 1
    }
  }
b(arr);
return sum;
     }
  }


module.exports = {
  DepthCalculator
};
