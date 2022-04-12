let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((x)=>+x);

const set = new Set(input.map((x)=>x%42));

console.log(set.size);