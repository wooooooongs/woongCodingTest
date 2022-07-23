function solution(a){
  const arr = txt.split('');
  let answer = '';
  for(i=0; i<arr.length; i++){
    if(arr[i] === 'A') answer += '#'
    else answer += arr[i]
  }

  return answer;
}


function solution2(a){
  let answer = '';

  for(v of a){
    if(v === 'A') answer += '#'
    else answer += v
  }

  return answer;
}

let txt = 'BANANA';
console.log(solution(txt)) // B#N#N#
console.log(solution(txt)) // B#N#N#