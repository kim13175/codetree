function checkBasicOperation(numA, numC, op) {
    switch (op) {
        case '+':
            console.log(`${numA} ${op} ${numC} = ${numA + numC}`);
            break;
        case '-':
            console.log(`${numA} ${op} ${numC} = ${numA - numC}`);
            break;
        case '*':
            console.log(`${numA} ${op} ${numC} = ${numA * numC}`);
            break;
        case '/':
            console.log(`${numA} ${op} ${numC} = ${parseInt(numA / numC)}`);
            break;
        default:
            return False;
    }
}

const fs = require('fs');
let [numA, op, numC] = fs.readFileSync(0).toString().trim().split(" ")
numA = parseInt(numA);
numC = parseInt(numC);
checkBasicOperation(numA, numC, op);