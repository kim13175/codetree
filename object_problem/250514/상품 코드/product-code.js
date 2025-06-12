const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [prod2_id, code2] = input[0].split(' ');
// Please Write your code here.
class product {
    constructor(id, code) {
        this.id = id;
        this.code = code;
    }

    printProduct() {
        console.log(`product ${this.code} is ${this.id}`);
    }
}

productA = new product('codetree', 50);
productB = new product(prod2_id, code2);

let products = [
    productA,
    productB,
];

for (let i = 0; i < products.length; i++) {
    products[i].printProduct();
}