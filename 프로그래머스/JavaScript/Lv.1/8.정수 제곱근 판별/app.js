function solution(n) {
  if(Number.isInteger(Math.sqrt(n)) === false) return -1;

  return Math.pow(Math.sqrt(n)+1,2)
}

solution(3);