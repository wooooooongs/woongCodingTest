let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let num = ''

for(i=0; i<input.length-1; i++){
  num += +input[i].split(' ')[0] + +input[i].split(' ')[1] + '\n';
}

console.log(num);