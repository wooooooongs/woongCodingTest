let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const timer = input[1];
input = input[0].split(' ');

let hour = +input[0];
let min = +input[1] + +timer;

while(min >= 60){
  hour += 1;
  min -= 60;
}

if(hour >= 24){
  hour -= 24;
}

console.log(hour, min);