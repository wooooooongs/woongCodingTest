function 문자열로풀기(n) {
  return Number(n.toString().split('').sort((a, b) => { return b - a }).join(''));
}

function 숫자로풀기(n) {
  const arr = n + '';
  const answer = arr.split('').sort().reverse().join('');
  console.log(answer);
}