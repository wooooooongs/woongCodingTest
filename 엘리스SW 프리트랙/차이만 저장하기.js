function solution(numbers) {
  let numbers2 = numbers.split(",").map((v) => +v);
  let arr = [];

  for (i = 0; i < numbers2.length; i++) {
    if (i === 0) arr.push(numbers2[0]);
    else arr.push(numbers2[i] - numbers2[i - 1]);
  }

  const a = numbers2.filter((v) => {
    return v === 1;
  });
  const b = arr.filter((v) => {
    return v === 1;
  });

  // 8월 19일, 테스트 케이스가 문자열로 온다는 사실을 왜 잊고 있었을까
  // 19번 줄 리턴은 input 값으로, 20번 줄 리턴은 배열로 했다는 걸 잊고 있었다.

  if (a.includes(1) === false && b.includes(1) === false) return 0;
  if (a.length > b.length) return numbers2;
  else if (a.length < b.length) return arr;
  else if (a.length === b.length) return 0;
}
