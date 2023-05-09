let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = input[0]

for(i=1; i<=T; i++){
  let arr = input[i].split(' ')
  let str = arr[1];
  let arr1 = str.split('').map((v)=>{
    return v.repeat(arr[0])
  })

  console.log(arr1.join(''));
}