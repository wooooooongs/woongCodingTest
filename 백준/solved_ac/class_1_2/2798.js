const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const inputArr = input.split("\n");
const NM = inputArr[0].split(" ").map((v) => +v);
const N = NM[0];
const M = NM[1];
const cards = inputArr[1].split(" ").map((v) => +v);
let sumArr = [];
let sum = 0;
let answer = 0;

for (i = 0; i < N; i++) {
  // 첫번째 카드
  for (j = i + 1; j < N; j++) {
    // 두번째 카드
    for (k = j + 1; k < N; k++) {
      // 세번째 카드
      sum = cards[i] + cards[j] + cards[k];
      if (sum <= M) sumArr.push(sum);
    }
  }
}

sumArr.sort((a, b) => a - b);
console.log(sumArr[sumArr.length - 1]);