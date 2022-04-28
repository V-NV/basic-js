const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 *//*************************решено */
function getCommonCharacterCount(s1, s2) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let leng = 0
s1.length>s2.length?leng=s1.length:leng=s2.length
let a = s1.split('').sort()
let b = s2.split('').sort()
let count=0;
for(let i = 0;i<leng;i++){
   if(a.includes(b[i])){
        count = count + 1;
    a.splice(a[i],1)
  }
}
 
return count;
}

module.exports = {
  getCommonCharacterCount
};
