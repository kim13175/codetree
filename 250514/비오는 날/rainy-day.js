const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const forecasts = input.slice(1, n + 1).map(line => line.split(' '));

// Please Write your code here.
class rainyDay {
    constructor(date, day, weather) {
        this.date = date;
        this.day = day;
        this.weather = weather;
    }

    printDay() {
        console.log(`${this.date} ${this.day} ${this.weather}`);
    }
}

const makeDayInstances = (arr) => {
    let days = [];
    for (let i = 0; i < arr.length; i++) {
        const [date, day, weather] = arr[i];
        days.push(new rainyDay(date, day, weather));
    }
    return days.sort();
}

const pickRain = (instance) => {
    for (let i = 0; i < instance.length; i++) {
        if (instance[i].weather === 'Rain') return instance[i];
    }
}

let instance = makeDayInstances(forecasts);

let rainDay = pickRain(instance);
rainDay.printDay();