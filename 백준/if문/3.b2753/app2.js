let input = require('fs').readFileSync('/dev/stdin').toString().trim()
input = +input

if(input % 4 === 0){
  if(input % 100 !== 0 || input % 400 === 0){
    console.log(1);
  } else {
    console.log(0);
  }
} else {
  console.log(0);
}