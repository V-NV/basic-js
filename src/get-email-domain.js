const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
 
  /********************решено */
 
  e = email.split('');
let u = '';
let t =0;
for(i=0;i<e.length;i++){
if(e[i] === '@'){
  t = i
  }
}
return e.slice(t+1).join('');
}

module.exports = {
  getEmailDomain
};
