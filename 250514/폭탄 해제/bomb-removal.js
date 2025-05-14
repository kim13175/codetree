const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [u_code, l_color, time] = input[0].split(' ');
// Please write your code here.
class bomb {
    constructor(code, color, second) {
        this.code = code;
        this.color = color;
        this.second = second;
    }

    printCode() {
        console.log(`code : ${this.code}`);
    }

    printColor() {
        console.log(`color : ${this.color}`);
    }

    printSecond() {
        console.log(`second : ${this.second}`);
    }

    printAll() {
        this.printCode();
        this.printColor();
        this.printSecond();
    }
}

bombA = new bomb(u_code, l_color, time);
bombA.printAll();