function checkValidDate() {
    if (month === 2 && leapMonth()) return "Yes"; 
    if (month !== 2 && checkMonthPerDate() && validMonth()) return "Yes"; 
    return "No";
}

// 윤년
function leapMonth() {
    if (day > 28) return false;
    return true;
}

function checkMonthPerDate() {
    if (month >= 8) {
        if (month % 2 === 0) {
            if (day <= 31) return true;
            return false;
        }
        if (day <= 30) return true;
        return false;
    }
    if (month < 8) {
        if (month % 2 === 0) {
            if (day <= 30) return true;
            return false;
        }
        if (day <= 31) return true;
        return false;
    }
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