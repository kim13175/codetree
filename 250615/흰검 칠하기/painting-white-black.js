const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1).map(line => line.split(' '));

// Please Write your code here.
const recordLocation = (commands) => {  
    let location = [];
    let point = 0;
    let start = 0;
    let end = 0;
    for (let i = 0; i < commands.length; i++) {
        let [move, cmd] = input[i + 1].split(' ');
        move = parseInt(move, 10);
        if (cmd === 'L') {
            start = point - move;
            end = point;
            point -= move;
        } else {
            start = point;
            end = point + move;
            point += move;
        }
        end = point;
        location.push([start, end]);
    }
    return location;
};

const location = recordLocation(commands);
console.log(location);