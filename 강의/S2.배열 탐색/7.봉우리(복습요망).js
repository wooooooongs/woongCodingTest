function solution(input){
  let answer = 0;
  let n = input.length;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  for(i=0; i<n; i++){
    for(j=0; j<n; j++){
      // 봉우리
      let flag = 1;
      for(k=0; k<4; k++){
        let nx = i + dx[k];
        let ny = j + dy[k];
        if(nx >= 0 && nx < n && ny >= 0 && ny < n && input[nx][ny] > input[i][j]){
          flag = 0;
          break;
        }
      }
      if(flag) answer ++;
    }
  }
  return answer;
}

let input=[
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2]
];

console.log(solution(input));

// 전혀 이해를 못하고 넘어간다.
// for문이 세 개라서 그런걸까?