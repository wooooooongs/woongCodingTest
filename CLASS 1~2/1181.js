const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = input.shift();

input.sort((a, b) => {
  if (a.length === b.length) return a.localeCompare(b);
  else return a.length - b.length;
})

// 중복 제거를 위해 Set객체 사용
const uniqueArr = [...new Set(input)];

uniqueArr.forEach((v) => console.log(v));