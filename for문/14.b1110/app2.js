let input = require('fs').readFileSync('/dev/stdin').toString().trim()

let one = +input % 10
let ten = Math.floor(input/10)

console.log(one);
console.log(ten);