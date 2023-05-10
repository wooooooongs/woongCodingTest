const link = require('fs').readFileSync('input.txt').toString().split('\n');

const pcNum = +link.shift();
const pairNum = +link.shift();
const infested = Array(pcNum + 1).fill(0);
infested[1] = 1;

link.forEach((L) => {
  L = L.split(' ');

  const pc = L[0],
    connectedPc = L[1];

  if (infested[pc] === 1) infested[connectedPc] = 1;
});

console.log(infested.filter((p) => p).length - 1);
