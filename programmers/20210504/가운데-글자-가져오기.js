function solution(s) {
    var answer = '';
    return s.length % 2 ? s[parseInt(s.length / 2)] : s[s.length / 2 - 1] + s[s.length / 2];
}