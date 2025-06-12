const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let index = 0;
const [n, k, t] = input[index++].split(' ');
const words = [];
for (let i = 0; i < Number(n); i++) {
    words.push(input[index++]);
}

/* 특정 문자열로 시작되는지 체크 */
const checkedStart = (word, str) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== word[i]) return false; 
    }
    return true;  
}

/* 특정 문자열로 시작될 경우 배열에 push */
const filteredString = (words, str) => {
    let stringArr = [];
    for (let i = 0; i < words.length; i++) {
        if (checkedStart(words[i], str)) stringArr.push(words[i]);
    }
    return stringArr;
}

/* 필터링된 배열을 반환하는 함수 호출하여 n번째 문자열 출력하도록 만듦 */
const printString = (words, str, n) => {
    let filteredArray = filteredString(words, str).sort();
    return filteredArray[n - 1];
}

console.log(printString(words, t, k));