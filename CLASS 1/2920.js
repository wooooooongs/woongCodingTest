const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let count = 0;

for(i=0; i<input.length; i++){
  if(input[i] < input[i+1]){
    count++;
  }
}

if(count === 7){
  console.log('ascending');
} else if(count === 0){
  console.log('descending');
} else {
  console.log('mixed');
}