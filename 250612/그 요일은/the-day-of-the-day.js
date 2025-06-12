const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
const A = input[1];

// Please Write your code here.4
class Date {
    constructor(month, date) {
        this.month = month;
        this.date = date;
    }
}

const calcLastDay = (month) => {
    if (month < 8) {
        if (month % 2 === 0) {
            if (month === 2) return 29;
            else return 30;
        }
        else return 31; 
    } else {
        if (month % 2 === 0) return 31;
        else return 30;
    }
}

const calcDifferDay = (start, end) => {
    let day = 0;
    for (let i = start.month; i < end.month; i++) {
        if (i === start.month) day += calcLastDay(i) - start.date;
        else day += calcDifferDay(i);
    }
    day += end.date;
    return day;
}

const calcDayTime = (totalDate) => {
    return Math.round(totalDate / 7, 0);
}

const startDay = new Date(m1, d1);
const endDay = new Date(m2, d2);
console.log(calcDayTime(calcDifferDay(startDay, endDay)));