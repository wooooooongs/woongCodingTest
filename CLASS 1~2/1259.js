const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for(i=0; i<input.length-1; i++){
  input[i].split('').reverse().join('') == input[i] ? console.log('yes') : console.log('no');
}