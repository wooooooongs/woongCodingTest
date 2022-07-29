// switch문
function solution(a, b){
  let answer = [];

  for(i=0; i<a.length; i++){
    switch(a[i] - b[i]) {
      case 0:
        answer.push('D');
        break;
      case 1:
        answer.push('A');
        break;
      case 2:
        answer.push('B');
        break;
      case -1:
        answer.push('B');
        break;
      case -2:
        answer.push('A');
        break;
    }
  }

  return answer.join('\n');
}

// 단순 else if
function solution2(a, b){
  let answer = [];
  
  for(i=0; i<a.length; i++){
    if(a[i] === b[i]) answer += 'D' + ' ';
    else if(a[i] === 1 && b[i] === 3) answer += 'A' + ' ';
    else if(a[i] === 2 && b[i] === 1) answer += 'A' + ' ';
    else if(a[i] === 3 && b[i] === 2) answer += 'A' + ' ';
    else answer += 'B' + ' ';
  }

  return answer;
}

let a=[2, 3, 3, 1, 3];
let b=[1, 1, 2, 2, 3];

console.log(solution(a, b));
console.log(solution2(a, b));