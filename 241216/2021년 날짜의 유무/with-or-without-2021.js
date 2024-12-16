function checkValidDate(month, day) {
    if (month === 2) {
        if (day > 28) return "No";
    }
    if (month % 2 !== 0) {
        if (day > 31) return "No"
    }
    if (month % 2 === 0) {
        if (day > 30) return "No"
    }
    if (month > 12) return "No";
    return "Yes"
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

const month = input[0];
const day = input[1];

console.log(checkValidDate(month, day));