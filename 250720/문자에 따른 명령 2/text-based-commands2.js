const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const commands = input[0];
const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1]


// Please Write your code here.
const commandList = commands.split('');

const commandMove = (cmds) => {
    let x = 0, y = 0;
    let dir = 3;
    for (let i = 0; i < commandList.length; i++) {
        switch(cmds[i]) {
        case 'L':
            dir = (dir - 1 + 4) % 4;
            break;
        case 'R':
            dir = (dir + 1) % 4;
            break;
        case 'F':
            x = x + dx[dir], y = y + dy[dir];
            break;
        default:
            break;
        }    
    }
    return [x, y];
}

const [nx, ny] = commandMove(commandList);
console.log(nx, + ' ' + ny); 