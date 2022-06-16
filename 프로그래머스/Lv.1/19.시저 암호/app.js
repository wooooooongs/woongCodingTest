function solution(s, n) {
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