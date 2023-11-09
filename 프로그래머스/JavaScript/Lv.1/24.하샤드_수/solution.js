function solution(x) {
  let accumulatedNumber = x
    .toString()
    .split('')
    .map((s) => +s);

  accumulatedNumber = accumulatedNumber.reduce((acc, cur) => {
    acc += cur;

    return acc;
  });

  const isHarshadNumber = x % accumulatedNumber === 0;

  return isHarshadNumber;
}
