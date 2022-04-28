const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
date1 = new Date(date)
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();
//let dateNow = newDate(year,month,day)
if(!getMonth){return 'Invalid date!'}
if(date.length <= 0 || date == undefined){return 'Unable to determine the time of year!'}

if(month >=11 && month <=1){return 'winter'}
if(month >=2 && month <=4){return 'spring'}
if(month >=5 && month <=7){return 'summer'}
if(month >=8 && month <=10){return 'autumn'}
}

module.exports = {
  getSeason
};
