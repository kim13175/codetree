function isPalindrome(string) {
    if (string === reverseString(string)) return "Yes";
    return "No";
}

function reverseString(string) {
    let arr = string.split('');
    let reverseString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reverseString += arr[i]
    }
    return reverseString;
}

const fs = require("fs");
let str = fs.readFileSync(0).toString().trim();
let answer = isPalindrome(str);
console.log(answer);