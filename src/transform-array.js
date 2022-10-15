const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
   //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
//console.log(arr)
 // let arr2 = arr.slice().flat()//новый объект(массив)
//console.log(arr)
//let prev = '--discard-prev'.split();

if(!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
let arr2 = arr.slice().flat()//новый объект(массив)
//if(arr == 3){return arr}
//if(arr == 3.312312){return arr}
//if(arr == false){return arr}
//if(arr == null){return arr}
//if(arr == undefined){return arr}
//if(arr == { 'foo': 'bar' }){return arr}
//if(arr[0][0]){return [ 1, 2, 3 ]}

//if(arr[0] !== Number){return arr}


for(i=0;i<arr2.length;i++){
 
    if(arr2[i] == '--discard-next'){//удалить +1
  arr2.splice(`${i+1}`,1)
  
  }
  
  if(arr2[i] == '--discard-prev'){//удалить -1ый
    if(arr[i-1]){
       arr2.splice(`${i-1}`,1)
    }
}
  if(arr2[i] == '--double-next'){//вместо себя +1ый
   delete arr2[i]
    arr2[i] = arr[i+1]
    
}
 
  if(arr2[i] == '--double-prev'&&arr[i-1]){//заменить себя -1ый
  delete arr2[i]
    arr2[i] = arr[i-1]
    
}
}  
   for(i=0;i<arr2.length;i++){
if(arr2[i] == '--discard-next'){arr2.splice(i,1)} 
if(arr2[i] == '--discard-prev'){arr2.splice(i,1)}
if(arr2[i] == '--double-prev'){arr2.splice(i,1)}
if(arr2[i] == '--double-next'){arr2.splice(i,1)}
}
for(i=0;i<arr2.length;i++){
if(arr2[i] == '--discard-next'){arr2.splice(i,1)} 
if(arr2[i] == '--discard-prev'){arr2.splice(i,1)}
if(arr2[i] == '--double-prev'){arr2.splice(i,1)}
if(arr2[i] == '--double-next'){arr2.splice(i,1)}
if(arr2[i] == undefined){arr2.splice(i,1)}
//if(arr2[i].incudes(undefined)){arr2.splice(i,1)}
}

return arr2;
  

}


module.exports = {
  transform
};
