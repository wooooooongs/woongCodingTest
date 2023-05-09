// 좌표 정렬하기(S5-11650)

const input = require('fs').readFileSync('input.txt').toString().split('\n');

const coordinate = input.slice(1).map((str) => str.split(' ').map(Number));
const answer = coordinate
  .sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  })
  .reduce((result, coords) => (result += `${coords[0]} ${coords[1]}\n`));

console.log(answer.trim());
