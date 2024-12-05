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
            return False;
    }
}

function printCalc(numA, numC, op, isBasicOp) {
    if (isBasicOp === 'False') return False;
    console.log(`${numA} ${op} ${numC} = ${checkBasicOperation(numA, numC, op)}`);
}

const fs = require('fs');
let [numA, op, numC] = fs.readFileSync(0).toString().trim().split(" ")
numA = parseInt(numA);
numC = parseInt(numC);
printCalc(numA, numC, op, checkBasicOperation(numA, numC, op));