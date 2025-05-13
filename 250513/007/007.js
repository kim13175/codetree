const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [s_code, m_point, time] = input[0].split(' ');
// Please Write your code here.
class secret {
    constructor(code, point, time) {
        this.code = code;
        this.point = point;
        this.time = time;
    }
    
    printCode(code) {
        console.log(`secret code : ${code}`);
    }

    printPoint(point) {
        console.log(`meeting point : ${point}`);
    }

    printTime(time) {
        console.log(`time : ${time}`);
    }

    printAll() {
        this.printCode(this.code);
        this.printPoint(this.point);
        this.printTime(this.time);
    }
}

const newSecret = new secret(s_code, m_point, time);
newSecret.printAll();
