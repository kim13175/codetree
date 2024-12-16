function checkValidDate() {
    if (checkMonthPerDate() && validMonth()) return "Yes"; 
    return "No";
}

function checkMonthPerDate() {
    if (leapYear()) return true;
    if (month >= 8) {
        if (month % 2 === 0) {
            if (day > 31) return false;
        }
        if (day > 30) return false;
    }
    if (month < 8) {
        if (month % 2 === 0) {
            if (day > 30) return false;
        }
        if (day > 31) return false;
    }
    return true;
}

function leapYear() {
    if (month === 2) {
        if (day > 28) return false
    };
    return true;
}

function validMonth() {
    if (month <= 12) return true;
    return false;
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

const month = input[0];
const day = input[1];

console.log(checkValidDate(month, day));