function changeNumber(a, b) {
    [a, b] = [b, a];
    return [a, b];
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let [a, b] = input;

changeNumber(a, b).map(num => process.stdout.write(String(num) + ' '));