let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let num = +input[0].split(' ')[0];
let X = +input[0].split(' ')[1];
let seq = input[1].split(' ');
let answer = '';

for(i=0; i<num; i++){
  if(X > +seq[i]){
    answer += +seq[i] + ' ';
  }
}

console.log(answer);