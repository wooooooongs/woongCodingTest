# 소수 찾기(B2-1978)

[문제 주소](https://www.acmicpc.net/problem/1978)

## 설명 및 회고

- 아리스토텔레스의 체를 이용했다. https://ko.wikipedia.org/wiki/에라토스테네스의_체
- 핵심은 n \*\* 2 > 최댓값. n보다 작은 수의 배수들만 지워도 된다는 점이다.
- filter 함수를 내가 생각한 대로 쓸 수 있는 단계에 와서 기쁘다.
- `input.filter((n) => n % i !== 0);` 처음엔 이런 코드였는데, 2, 3, 4, 5...의 배수는 제거를 성공했는데, 정작 2, 3, 4, 5가 없어져서
- `input.filter((n) => (n === i ? 1 : n % i !== 0));` 이렇게 바꾸어주었다.
