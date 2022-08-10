function solution() {
  let answer = 0;
  let isPrime = '';

  for (i = 2; i <= 200; i++) {
    isPrime = 'yes';

    for (j = 2; j < i; j++) {
      if (i % j === 0) isPrime = 'no';
    }

    if (isPrime === 'yes') answer += i;
  }

  return answer;
}

console.log(solution());