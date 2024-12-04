function customPow(numA, numB) {
    return Math.pow(numA, numB);
}

const fs = require('fs');
const [numA, numB] = fs.readFileSync(0).toString().trim().split(" ").map(Number);
process.stdout.write(customPow(numA, numB).toString())