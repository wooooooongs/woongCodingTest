let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

let num = input;
let sum;
let cycle = 0;

while(true){
  cycle++;
  sum = Math.floor(num/10) + num%10; // 14
  num = (num%10) * 10 + sum%10;

  if(num === input){
    break;
  }
}

console.log(cycle);