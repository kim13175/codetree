const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const moves = input.slice(1);

// Please Write your code here.
const moveLocation = (moves) => {
    let dx = 0, dy = 0;
    for (let i = 0; i < moves.length; i++) {
        let [dir, dist] = moves[i].split(' ');
        dist = parseInt(dist);
        switch(dir) {
            case 'E':
                dx = dx + dist;
                break;
            case 'W':
                dx = dx - dist;
                break;
            case 'S':
                dy = dy - dist;
                break;
            case 'N':
                dy = dy + dist;
                break;
            default:
                break;
        }
    }
    return [dx, dy];
}

console.log(moveLocation(moves).join(' '));