const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [user_id, levelStr] = input[0].split(' ');
const level = parseInt(levelStr);

// Please Write your code here.
class user {
    constructor(id, level) {
        this.id = id;
        this.level = level;
    }

    printInfo() {
        console.log(`user ${this.id} lv ${this.level}`);
    }
}

newUser = new user('codetree', 10)
newUser2 = new user(user_id, level);

newUser.printInfo();
newUser2.printInfo();
