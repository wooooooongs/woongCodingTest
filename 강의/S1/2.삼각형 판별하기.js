function solution(a, b, c){
  let max;
  let sum = a + b + c;

  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;

  sum -= max;

  sum > max ? console.log('YES') : console.log('NO');
}

solution(6, 7, 11) // YES
solution(13, 33, 17) // NO