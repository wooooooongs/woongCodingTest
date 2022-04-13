let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const caseNum = +input[0];

for(i=1; i<=caseNum; i++){
  let j = sum = average = count = 0;
  let testArr = input[i].split(' ').map(x=>+x);
  let studentNum = +testArr[0];

  while(j<=studentNum){
    j++
    console.log(testArr[j]);
    // console.log(sum);
  }

  // average = sum / studentNum;
  // j = 0;
  // console.log(sum);

  // while(j<=studentNum){
  //   j++
  //   if(average >= +testArr[j]){
  //     count++
  //   }
  // }
  // console.log(count);
}