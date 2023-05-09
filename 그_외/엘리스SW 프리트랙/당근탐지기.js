function solution(a, b) {
  let arr = a.split(' ');

  let [left, right] = [arr.slice(0, b), arr.slice(b - 1, arr.length)];
  let [countL, countR] = [0, 0];

  left.forEach((v) => {
    if (v === 'O') countL++;
  });

  right.forEach((v) => {
    if (v === 'O') countR++;
  });

  if (countL > countR) return '왼쪽';
  else if (countR > countL) return '오른쪽';
  else return '동일';
}