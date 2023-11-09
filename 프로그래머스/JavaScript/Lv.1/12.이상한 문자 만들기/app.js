function solution(s) {
  let answer = [];
  let arr = s.split(' ');
  console.log(arr);

  for(i=0; i<arr.length; i++){
    answer.push(arr[i].split('').map((a,k) => k % 2 ? a.toLowerCase() : a.toUpperCase()).join(''));
    console.log(answer);
  }
  console.log(answer.join(' ')); 
  // answer[0]가 aaaaaaa에 있다면 ㅇㄷ?
  // arr.indexOf(answer[i]) % 2 === 0 ? 

}

solution("try hello world")