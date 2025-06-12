const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

// Please Write your code here.
class Date {
    constructor(month, date) {
        this.month = month;
        this.date = date;
    }
}

const startDay = new Date(m1, d1);
const endDay = new Date(m2, d2);

const monthLastDay = (month) => {
    if (month < 8) {
        if (month % 2 === 0) {
            if (month === 2) return 28
            else return 30;
        } 
        else return 31; 
    } else {
        if (month % 2 === 0) return 31;
        else return 30;
    }
}

const calcTotalDay = (month, date) => {
    let monthDate = 0;
    for (let i = 1; i <= month; i++) {
        monthDate += monthLastDay(i);
    };
    monthDate += date;
    return monthDate;
}

const dateToDay = (totalDate) => {
    const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const remainDay = parseInt(totalDate % 7, 10);
    return week[1 + remainDay]; 
}

const timeToDate = calcTotalDay(endDay.month, endDay.date) - calcTotalDay(startDay.month, startDay.date);
console.log(dateToDay(timeToDate));



