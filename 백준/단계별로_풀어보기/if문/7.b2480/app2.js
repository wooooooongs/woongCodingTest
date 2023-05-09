let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
input.sort((a,b)=> b-a);

let [a,b,c] = [input[0],input[1],input[2]]
if(a === b && b === c){
  console.log(10000 + a * 1000);
} else {
  if(a === b || b === c){
    console.log(1000 + b * 100);
  } else {
    console.log(a * 100);
  }
}