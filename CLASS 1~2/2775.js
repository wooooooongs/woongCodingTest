function solution(input) {
  const inputArr = input.split('\n').map((v) => +v);
  const T = inputArr.shift();
  let sum1 = 0;

  // 0층 3호까지
  for (i = 1; i <= 3; i++) {
    sum1 += i;
  }

  // k층의 n호에는 k-1층 n호 + k층 n-1호 사람이 산다.
}

const input = `2
1
3
2
3`;
console.log(solution(input));