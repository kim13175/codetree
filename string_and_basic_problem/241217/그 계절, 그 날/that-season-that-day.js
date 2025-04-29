function printSeason() {
    if (checkValidDate()) {
        return checkSeason();
    }
    return "-1";    
}

function checkValidDate() {
    if (month === 2) {
        if (checkLeapYear()) {
            if (day > 29) return false;
            return true;
        }
        if (day > 28) return false;
        return true; 
    }
    if (overValidDate()) return false;
    return true;
}

function checkSeason() {
    if (3 <= month && month <= 5) return "Spring";
    if (6 <= month && month <= 8) return "Summer";
    if (9 <= month && month <= 11) return "Fall";
    if (12 === month || month <= 2) return "Winter";
}

function checkLeapYear() {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) return true;
            return false;
        }
        return true;
    }
    return false;
}

function overValidDate() {
    if (month < 8) {
        if (!halfYearDate()) return true;
        return false;
    }
    if (month >= 8) {
        if (!secondHalfYearDate()) return true;
        return false;
    }
}

function halfYearDate() {
    if (month % 2 === 0) {
        if (day > 30) return false;
        return true;
    }
    if (month % 2 !== 0) {
        if (day > 31) return false;
        return true;
    }
}

function secondHalfYearDate () {
    if (month % 2 === 0) {
        if (day > 31) return false;
        return true;
    }
    if (month % 2 !== 0) {
        if (day > 30) return false;
        return true;
    }
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const year = input[0];
const month = input[1];
const day = input[2];

console.log(printSeason());