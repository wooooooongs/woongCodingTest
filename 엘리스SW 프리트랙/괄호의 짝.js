function solution(string) {
  const arr = string.split('');

  

  // 괄호 외 제거
  // let brackets = [];

  // 1. forEach(), push() 사용
  // arr.forEach((v) => {
  //   if (v === '(' || v === ')' || v === '[' || v === ']' || v === '{' || v === '}') brackets.push(v);
  // })

  // 2. filter 사용. push가 필요없다.
  const filteredArr = arr.filter(v => {
    return (
      v === '(' || v === ')' || v === '[' || v === ']' || v === '{' || v === '}'
    );
  });



  for (i = 0; i < filteredArr.length; i++) {
    if (filteredArr[i] === undefined) continue;
    label: for (j = i; j < filteredArr.length; j++) {
      if (filteredArr[j] === undefined) continue;

      function filtering(b, b2) {
        if (filteredArr[i] === b && filteredArr[j] === b2) {
          filteredArr[i] = undefined;
          filteredArr[j] = undefined;
          break label;
          // 점프 대상은 함수 경계를 벗어날 수 없다.
        }
      }
      filtering('(', ')')
      filtering('{', '}')
      filtering('[', ']')
      // if (filteredArr[i] === '(' && filteredArr[j] === ')') {
      //   filteredArr[i] = undefined;
      //   filteredArr[j] = undefined;
      //   break;
      // }
      // if (filteredArr[i] === '{' && filteredArr[j] === '}') {
      //   filteredArr[i] = undefined;
      //   filteredArr[j] = undefined;
      //   break;
      // }
      // if (filteredArr[i] === '[' && filteredArr[j] === ']') {
      //   filteredArr[i] = undefined;
      //   filteredArr[j] = undefined;
      //   break;
      // }
    }
  }

  const answer = filteredArr.filter(v => {
    return v !== undefined;
  });

  if (answer.length === 0) return '정상';
  else return '비정상';
}