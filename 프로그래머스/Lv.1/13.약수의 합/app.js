const a = 12;
const arr = [];

for(i=0; i<=a; i++){
  a % i === 0 ? arr.push(i) : '';
}

let answer = arr.reduce((a,c) => a + c, 0);
// 두번째 파라미터에 0을 붙이지 않으면 런타임 에러가 뜬다.