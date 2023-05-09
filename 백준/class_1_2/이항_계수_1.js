const [N, K] = require('fs').readFileSync('./input.txt').toString().split(' ');

let n1 = 1;
let n2 = 1;

for (i = 0; i < K; i++) {
  n1 *= N - i;
  n2 *= K - i;
}

console.log(n1 / n2);
