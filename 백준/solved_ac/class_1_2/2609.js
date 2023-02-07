const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const n1 = input[0];
const n2 = input[1];

function gcd(a,b){
  if (b === 0) return a;
  else return gcd(b, a%b)
}

console.log(gcd(n1,n2));
console.log(n1 * n2 / gcd(n1,n2));