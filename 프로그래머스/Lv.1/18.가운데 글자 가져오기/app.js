function solution(a) {
  if(a.length % 2 === 1) return a[a.length/2 - 0.5]
  else return a[a.length/2-1] + a[a.length/2]
}

function solution2(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}


// 테스트케이스 1 = "abcde" return = "c"
// 테스트케이스 2 = "qwer"  return = "we"