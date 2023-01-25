function solution(s){
  let answer = '';

  for(let i = 0; i < str.length; i++) {
    console.log(s[i], i, s.indexOf(s[i]));
    if(i === s.indexOf(s[i])) answer += s[i]
  }
  

  return answer;
}

let str = 'ksekkset';
console.log(solution(str)); // kset