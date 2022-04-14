## 백준-2231 분해합 node.js

1차 시도

```js
const input = require('fs').readFileSync('/dev/stdin');

let arr = [];

for(i=1; i<input; i++){
  let n1 = i.toString().split('').map((n)=>+n)
  let calc = 0;
  
  for(j=0; j<n1.length; j++){
    calc += n1[j]
  }
  calc += i
  calc == input ? arr.push(i) : false;
}

console.log(input == 0 ? 0 : arr[0]);
```

~~ 틀렸습니다가 떠써 당황했다.  
입력 범위를 잘 확인하지 않았기 때문이었다.  
999,999까지는 구해지는데, 1,000,000이 `undefined`가 출력되는 것을 확인했다. ~~

뿐만 아니라 1 3 5 7 9... 등이 undefined가 뜨는 것을 확인했다....
난 바보다





