function checkBasicOperation(numA, numC, op) {
    switch (op) {
        case '+':
            return numA + numC;
        case '-':
            return numA - numC;
        case '*':
            return numA * numC;
        case '/':
            return parseInt(numA / numC);
        default:
            return false;
    }
}

const fs = require('fs');
let [numA, op, numC] = fs.readFileSync(0).toString().trim().split(" ")
numA = parseInt(numA);
numC = parseInt(numC);
console.log(`${numA} ${op} ${numC} = ${checkBasicOperation(numA, numC, op)}`);