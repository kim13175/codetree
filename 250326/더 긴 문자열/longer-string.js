const fs = require('fs');
let [string1, string2] = fs.readFileSync(0).toString().trim().split(' ');
const lenA = string1.length;
const lenB = string2.length;

if (lenA > lenB) {
    console.log(string1, lenA);
} else if (lenA < lenB) {
    console.log(string2, lenB);
} else {
    console.log('same');
}