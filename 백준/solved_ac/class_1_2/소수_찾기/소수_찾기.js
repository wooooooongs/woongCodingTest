function solution(input) {
  let answer = '';
  input = input
    .split(' ')
    .map((n) => +n)
    .sort((a, b) => a - b)
    .filter((n) => n !== 1);

  const max = input.at(-1); // 35
  const 여기까지만 = parseInt(Math.sqrt(max)); // 5
  // 5의 배수까지만 제거하면 된다.

  for (i = 2; i <= 여기까지만; i++) {
    input = input.filter((n) => (n === i ? 1 : n % i !== 0));
  }

  return input.length;
}

const input =
  '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35';
console.log(solution()); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31 ]
