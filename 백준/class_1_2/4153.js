const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for(i=0; i<input.length-1; i++){
  let arr = input[i].split(' ')
  const arr2 = arr.sort((a,b) => a-b)
  if(Math.pow(+arr2[0],2) + Math.pow(+arr2[1],2) === Math.pow(arr2[2],2) === true) {
    console.log('right')
  } else {
    console.log('wrong')
  };
}