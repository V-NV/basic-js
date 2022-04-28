const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 *//********************решено* */
function encodeLine(str) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
let a = str.split('');//str в массив
let b =[]
let d =[]
let t =[]
let c = 1//счетчик
for(i=0;i<a.length;i++){
  if(a[i] == a[i+1]){
    c = c + 1}//количество совпадений
  else{b.push([c,a[i]])
        c = 1//сброс счетчика
      }
    }
t = b.flat()
for(i=0;i<t.length;i++){
  if(t[i] !== '1' && t[i] !== 1){d.push(t[i])}//удаление еденицы
}
return d.join('')
}

module.exports = {
  encodeLine
};
