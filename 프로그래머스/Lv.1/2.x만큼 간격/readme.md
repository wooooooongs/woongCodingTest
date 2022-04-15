# 풀이2

> 풀이 1은 근본 for문을 이용한 풀이이니 넘어간다.

<br>


##### 사용 문법
`new Array()` `fill()` `map()`
<br>

<br><br>
## new Array()
new는 생략하여 사용해도 됨.  
`Array()` 문자열을 매개변수로 제공하면, 문자열을 배열에 할당하지만  
숫자를 넣으면 그 숫자만큼의 undefined를 채운다.  

```js
const a = 'ah ha'
const b = 2

console.log(a);
// ['ah ha']
console.log(b);
// [ <2 empty items> ]
```

## fill()
`arr.fill(value[, start[, end]])`  

`value` 배열에 채울 값  
`start` 시작 index (option, 기본값 0)  
`end` 종료 index (option, 기본값 arr.length)


## map()
`arr.map(( element, index, arr ) => { return element });`  
반복문으로 arr를 순회하며 하나하나 함수를 적용시켜준다.  
map을 실행하여 나오는 배열과 기존 배열은 다른 객체임을 알아두자.  

[제로초님 블로그 map(), redue()](https://www.zerocho.com/category/JavaScript/post/5acafb05f24445001b8d796d)

``` js
// 예) 1, 2, 3을 담고있는 arr. 모든 요소에 2를 곱하고 싶다!!
const arr = [1, 2, 3];
let result = arr.map((v) => {
  console.log(v * 2);
})
//2 4 6
```
