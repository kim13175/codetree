const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

let newArr = new Array(input.length);
newArr = input;

const checkPrintOdd = (arr) => {
    for (let i = 0; i < arr.length; i += 2) {
        console.log(arr[i]);
    }
}

checkPrintOdd(newArr)



