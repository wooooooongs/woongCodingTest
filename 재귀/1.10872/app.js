let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

function f(n){
  if(n === 0){
    return 1;
  }
  return n * f(n-1);
}

console.log(f(input));