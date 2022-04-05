let input = require('fs').readFileSync('/dev/stdin').toString().trim()
input = +input;

if(90 <= input){
  console.log('A');
} else if(79 < input){
  console.log('B');
} else if(69 < input){
  console.log('C');
} else if(59 < input){
  console.log('D');
} else {
  console.log('F');
}