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
    let day = 1;
    if (start.month === end.month) return (end.date - start.date);
    for (let i = start.month; i < end.month; i++) {
        if (i === start.month) day += calcLastDay(i) - start.date;
        else day += calcDifferDay(i);
    }
    day += end.date;
    return day;
}

const calcDayTime = (totalDate, day) => {
    let cnt = 0;
    const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    for (let i = 0; i <= totalDate; i++) {
        if (week[i % 7] === day) cnt += 1;
    }
    return cnt;
}

const startDay = new Date(m1, d1);
const endDay = new Date(m2, d2);
console.log(endDay.month);
console.log(calcDayTime(calcDifferDay(startDay, endDay), A));