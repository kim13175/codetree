const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const personLines = input.slice(1, n + 1);

// Please Write your code here.
class personInfo {
    constructor(name, address, region) {
        this.name = name;
        this.address = address;
        this.region = region;
    }

    printInfo() {
        console.log(`name ${this.name}`);
        console.log(`addr ${this.address}`);
        console.log(`city ${this.region}`);
    }
}

const inputInfo = (arr) => {
    let informations = [];
    for (let i = 0; i < arr.length; i++) {
        informations.push(arr[i].split(' '));
    }
    return informations;
}

const info = inputInfo(personLines).sort;

const [name, addr, country] = info[info.length - 1];

const pickInfo = new personInfo(name, addr, country);
pickInfo.printInfo();