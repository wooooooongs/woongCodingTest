## 배열의 최대값 최소값 구하기

### 0. Math.max(), Math.min()
`Math.max()`는 기본적으로 가장 큰 수를 변환.
min은 반대로 가장 작은 값을 변환한다.<br>
**하지만** 배열을 사용한다면 NaN에러가 뜨면서 인식하지 못한다.

```js
console.log(Math.max(13, 35));
// 35

let arr = [13, 35];
console.log(Math.max(arr));
// NaN
```


#### 1. Math.max.apply()
`apply()`메서드를 같이 이용하는 방법
[https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
]()

``` js
let arr = [20, 10, 35, 30, 7];
console.log(Math.max.apply(null, arr);
// 35
```

#### 2. 스프레드 연산자(...)
변수앞에 스프레드 연산자 `...`를 추가하여 손쉽게 합치는 ES6문법이 있다.
간단한 문법인데, 예시를 보면 한 눈에 이해가 가능하다.

```js
let arr1 = [1, 2, 3];
let arr2= [4, 5, 6];
console.log(...arr1, ...arr2);
// 1, 2, 3, 4, 5, 6;
```

#### 3. 반복문