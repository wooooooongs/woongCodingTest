const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let arr = [[1], ['ABC'], ['DEF'], ['GHI'], ['JKL'], ['MNO'], ['PQRS'], ['TUV'], ['WXYZ'], [0]];
let answer = 0
for(i=0; i<arr.length; i++){
  for(j=0; j<input.length; j++){
    if(arr[i].join().includes(input[j])) answer += arr.indexOf(arr[i]) + 2;
  }
}
console.log(answer);