function solution(input){
  // 각 행, 열, 2대각선의 합을 담는 공간
  let [rowSum, colSum, xSum] = [[], [], []];
  let [sumTemp, x1SumTemp, x2SumTemp] = [0, 0, 0];

  for(i=0; i<5; i++){
    // 행
    rowSum.push(input[i].reduce((acc, cur) => {
      return acc + cur;
    }));
    
    // 열
    for(j=0; j<5; j++){
      sumTemp += input[j][i];
    }
    colSum.push(sumTemp);
    sumTemp = 0;

    // 대각
    x1SumTemp += input[i][i];
    x2SumTemp += input[i][5-i-1];
  };
  // for문이 끝난 후 2 대각선 합을 push하기
  xSum.push(x1SumTemp);
  xSum.push(x2SumTemp);
  
  // 결과
  return Math.max(...rowSum, ...colSum, ...xSum);
}


let input = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19]
];

console.log(solution(input));