function solution(input) {
  const arr = input.split('\n');
  let [arrA, arrB, answer] = [[], [], []];
  
  // 구간 만들어주기
  for (i = +arr[0]; i <= arr[1]; i++) {
    arrA.push(i);
  }
  for (i = +arr[2]; i <= arr[3]; i++) {
    arrB.push(i);
  }

  arrA.map((v) => {
    if (arrB[arrB.indexOf(v)] !== undefined) {
      answer.push(arrB[arrB.indexOf(v)]);
    }
  })

  if (answer[0] === undefined) return 'X';
  else return [answer[0], answer[answer.length-1]];
}

// A최솟값 === 3 && A최댓값 === 7 일 때 배열을 다음과 같이 새로 만들었고 [3, 4, 5, 6, 7]
// 두 배열이 나올 때 indexOf을 이용해 answer배열에 겹치는 구간을 삽입하여 최솟값, 최댓값만 출력했다 