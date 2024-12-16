function checkValidDate() {
    if (checkMonthPerDate() || leapYear() || validMonth()) return "Yes"; 
    return "No";
}

function checkMonthPerDate() {
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
        if (day > 31) return true;
    }
}

function leapYear() {
    if (month === 2) return true;
    return false;
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