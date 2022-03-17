

solution(input[0], input[1]);

function solution(A, B) {
  if(0 < A && 0 < B){
    console.log('1');
  }
  if(0 > A && 0 < B){
    console.log('2');
  }
  if(0 > A && 0 > B){
    console.log('3');
  }
  if(0 < A && 0 > B){
    console.log('4');
  }
}

