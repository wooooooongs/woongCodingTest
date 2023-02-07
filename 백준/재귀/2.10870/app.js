let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

function f(n){
  if(n === 0){
    return 0
  }
  if(n === 1){
    return 1
  }

  return f(n-1) + f(n-2)
}

console.log(f(input));