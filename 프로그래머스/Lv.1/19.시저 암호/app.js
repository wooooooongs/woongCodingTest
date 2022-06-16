// 방법 1. 테스트 케이스 13개 중 9개 통과하지 못함. 

function solution1(s, n) {
    let string = s.split('');
    let answer = '';
    
    for(i=0; i<string.length; i++){
        let v = string[i].charCodeAt(0);

        if(v === 32) answer += ''
        else v += n

        if(v > 122) v -= 26
        // v > 122
        answer += String.fromCharCode(v)
    }    

    string

    return answer;
}

console.log(solution('AB', 1)); 
console.log(solution('a B z', 4)); 


// 방법 2. map을 써서 for문을 대체할 수 있고 기존 방법 1은 소문자 대문자 모두 고려하였으나,
// 알파벳 수는 같으니 둘 다 소문자 혹은 대문자로 변환 후 계산해주는 것이 더 편하다.
function solution2(s, n) {
    const answer = s.split('').map((v) => {
        if(v === ' ') return ' ';
        if(v.toUpperCase().charCodeAt(0) + n > 90) return String.fromCharCode(v.charCodeAt(0) + n - 26)
        else return String.fromCharCode(v.charCodeAt(0) + n)
    })
    return answer.join('')
}