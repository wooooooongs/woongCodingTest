const input = require('fs').readFileSync('./input.txt').toString().split('\n');

const cmdNum = input.shift();
const allArr = Array(20)
  .fill(1)
  .map((v, i) => v + i);

let result = '';
let S = [];

const setFunc = (str) => {
  let [cmd, x] = str.split(' ');
  x = +x;
  const isIncludeX = S.includes(x);

  switch (cmd) {
    case 'add':
      isIncludeX || S.push(x);
      break;
    case 'remove':
      if (isIncludeX) S = S.filter((v) => v !== x);
      break;
    case 'check':
      result += Number(isIncludeX) + '\n';
      break;
    case 'toggle':
      if (isIncludeX) S = S.filter((v) => v !== x);
      else S.push(x);
      break;
    case 'all':
      S = allArr;
      break;
    case 'empty':
      S = [];
      break;
  }
};

input.forEach(setFunc);

console.log(result.trim());
