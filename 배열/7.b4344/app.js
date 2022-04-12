let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const caseNum = +input[0];

for(i=1; i<=caseNum; i++){
  let sum = average = count = 0;
  let testArr = input[i].split(' ');
  let studentNum = +testArr[0];

  for(j=1; j<=studentNum; j++){
    sum += +testArr[j];
    if(j === studentNum){
      average = sum / studentNum;
      for(k=0; k<=j; k++){
        if(testArr(j) > average){
        count++;
        }
      }
      console.log(count);
    }
  }
}