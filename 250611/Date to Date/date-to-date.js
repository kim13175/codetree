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

const start = new Date(m1, d1);
const end = new Date(m2, d2);


const monthDate = (month) => {
    if (month < 8) {
        if (month % 2 !== 0) {
            if (month === 2) return 28;
            return 30;
        } else {
            return 31;
        }
    } else {
        if (month % 2 !== 0) {
            return 30;
        } else {
            return 31;
        }
    }
}

const calcDate = (start, end) => {
    let countDate = 0;

    while(true) {
        if (start.month === end.month && start.date === end.date) {
            break;
        }
        /* 달이 바뀔 경우 */
        if (start.date > monthDate(start.month)) {
            start.month += 1;
            start.date = 1;
            countDate += 1;
        } else {
            countDate += 1;
            start.date += 1;
        }
    }

    return countDate;
}

console.log(calcDate(start, end));