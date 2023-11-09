function solution(d, budget) {
  let count = 0;
  let sum = 0;

  d.sort((a, b) => a - b);

  for (i = 0; i < d.length; i++) {
    sum += d[i];

    if (sum > budget) return count;
    count++;
  }

  return count;
}

console.log(solution([1, 3, 2, 5, 4], 9));
console.log(solution([1, 2, 3, 4, 5], 9));
// console.log(solution([2, 2, 3, 3], 10));
