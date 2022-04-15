function soluition(x, n){
  return Array(n).fill(x).map((v, i) => v * (i + 1)
  )};

console.log(soluition(2,5));