const input = require('fs').readFileSync('/dev/stdin');

let arr = [];
let answer = 0;

for(i=1; i<=input; i++){
  let calc = 0;
  let n1 = i.toString().split('').map((n)=>+n)
  
  for(j=0; j<n1.length; j++){
    calc += n1[j]
  }
  calc += i
  calc == input ? arr.push(i) : false;

  arr[0] === undefined ? answer = 0 : answer = arr[0]
}

console.log(answer);