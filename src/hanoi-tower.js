const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */  
function calculateHanoi(disksNumber, turnsSpeed) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let disk = disksNumber;
  let turn = turnsSpeed; /*решено*/
  
  let turns =0;
  let second = 0;
  
  turns = 2**disk - 1;
  second = Math.floor(turns/(turn/3600));
  let obj = {
    turns:turns,seconds:second
  }
  console.log(turns);
  console.log(second);
  console.log(obj);

return obj;

}

module.exports = {
  calculateHanoi
};
