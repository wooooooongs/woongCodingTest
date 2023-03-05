# 제목

**2018 KAKAO BLIND RECRUITMENT 1차 - 비밀지도**

### 문제 주소

https://school.programmers.co.kr/learn/courses/30/lessons/17681

## 설명 및 회고

- `String.padStart([Number], [String])` 메서드를 처음 봤다. 주어진 길이에 맞게 문자열의 앞을 다른 문자열로 채우는 메서드다.
- 처음엔 위 기능을 반복문을 통해 어거지로 했었는데, 문자열이 ‘1’ 일 때는 자바스크립트 바보등신같은 놈이 숫자로 자꾸 인식해서 원래 썼던 기능을 포기했다. (solution1의 while문)

- 또한 이중for문을 다른 방식으로 더 쉽게 만들 수 있을 거 같다.
- 해설 읽어보니 if else 문이 아닌 비트 연산자를 쓸 수 있는지 알아보는 문제였다고 함. 비트 연산자를 좀 잘 익혀보자

## 새로운 것

1. String.padStart()  
   `String.padStart([Number], [String])`  
   매개변수 1: 목표 문자열 길이. 현재 문자열의 길이보다 작다면 채워넣지 않고 그대로 반환.  
   매개변수 2: 현재 문자열에 채워넣을 다른 문자열. 문자열이 너무 길어 목표 문자열 길이를 초과한다면 좌측 일부를 잘라서 넣음. 기본값은 " "

2. [비트연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_operators#비트_연산자)  
   비트연산자는 10진수 9를 2진수 1001으로 나타내어 연산을 한다.  
   `a & b`: AND, 두 피연산자의 각 자리 비트의 값이 모두 1인 위치에 1을 반환합니다.  
   `a | b`: OR, 두 피연산자의 각 자리 비트의 값이 모두 0인 위치에 0을 반환합니다.  
   등.. mdn을 참고하는 것이 바람직하다.
