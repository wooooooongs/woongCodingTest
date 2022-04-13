let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const caseNum = +input[0];

for(i=1; i<=caseNum; i++){
  let sum = count = 0;
  let testArr = input[i].split(' ').map(x=>+x);
  let studentNum = testArr[0];

  for(j=1; j<=studentNum; j++){
    sum += testArr[j];
  }

  let average = sum / studentNum;

  for(k=1; k<=studentNum; k++){
    if(average < testArr[k]){
      count++
    }
    // 1차시도: k를 0으로 시작해서 실패
  }
  
  console.log((count / studentNum * 100).toFixed(3) + '%');

  // 나와 비슷한 풀이법으로 조그만 수정만 했더니 시간이 100ms 줄었음. 분석해보자
}