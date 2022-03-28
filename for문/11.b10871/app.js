let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let max = '';
let num = '';
let seq = [];

max += input[0].split(' ')[0];
num += input[0].split(' ')[1];
seq.push(input[1].split(' '));

for(i=0; i<max; i++){
  if(+seq[0][i] < +num){
    console.log(+seq[0][i]);
  }
}