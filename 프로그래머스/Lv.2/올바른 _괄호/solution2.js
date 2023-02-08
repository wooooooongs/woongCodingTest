function solution(s) {
  if (s.length < 2) return false;
  //해당 코드가 없으면 효율성 테스트에서 떨어진다.

  let openCount = 0;

  for (i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      openCount++;
    } else {
      if (openCount < 1) return false;
      openCount--;
    }
  }

  return openCount > 0 ? false : true;
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
