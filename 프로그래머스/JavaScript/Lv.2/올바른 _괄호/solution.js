function solution(str) {
  if (str.length < 2) return false;

  const arr = str.split('');

  while (arr.length > 0) {
    const open = arr.indexOf('(');
    arr.splice(open, 1);

    const close = arr.indexOf(')');
    if (close < open) break;
    arr.splice(close, 1);
  }

  return !arr.length > 0;
}

const s1 = '()()'; // true
const s2 = '(())()'; // true
const s3 = ')()('; // false
const s4 = '(()('; // false
const s5 = '()())(()'; // false

console.log(solution(s1));
console.log(solution(s2));
console.log(solution(s3));
console.log(solution(s4));
console.log(solution(s5));

/*
  테스트 17, 효율성 테스트 1, 2가 실패했다. 힝
*/
