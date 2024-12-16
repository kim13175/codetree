function checkValidDate() {
    if (leapYear() && checkMonthPerDate() && validMonth()) return "Yes" 
    return "No";
}

// 윤년
function leapYear() {
    if (day > 28) return false;
    return true;
}

function checkMonthPerDate() {
    if (month >= 8) {
        if (month % 2 === 0) {
            if (day <= 31) return true;
        }
        if (day <= 30) return true;
    }
    if (month < 8 && month !== 2) {
        if (month % 2 === 0) {
            if (day <= 30) return true;
        }
        if (day <= 31) return true;
    }
    return false;
}

// 유효한 개월 수
function validMonth() {
    if (month <= 12) return true;
    return false;
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

const month = input[0];
const day = input[1];

console.log(checkValidDate());