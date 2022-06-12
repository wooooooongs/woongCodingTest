const input = require('fs').readFileSync('/dev/stdin');

let arr = [];

for(i=1; i<input; i++){
  let n1 = i.toString().split('').map((n)=>+n)
  let calc = 0;
  
  for(j=0; j<n1.length; j++){
    calc += n1[j]
  }
  calc += i
  calc == input ? arr.push(i) : false;
}

console.log(input == 0 ? 0 : arr[0]);