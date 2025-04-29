const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];
// Please Write your code here.
const checkCh = (str) => {
    if (str.length === 1) return 'No';
    
    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] !== str[i]) return 'Yes'; 
    }
    return 'No';
}

console.log(checkCh(A));