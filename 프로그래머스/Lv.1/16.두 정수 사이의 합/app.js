let a = 5
let b = 3
// 주어지는 정수

let c = 0;
let d = 0;
let answer = 0;

if(a > b){
  c = b
  d = a
} else {
  c = a
  d = b
}

for(i = c; i <= d; i++){
  answer += i
}

// 한 줄로 짜기
// for(i = Math.min(a, b); i <= Math.max(a, b); i++) answer += i;
// return answer
