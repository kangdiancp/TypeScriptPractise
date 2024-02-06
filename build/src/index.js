"use strict";
// data type primitive
/* boolean
number
symbol
any
never
void */
//1. declare basic variable use annotation
const productId = 10;
const proudctName = "TV";
let isAvailble = false;
//2. without annoty type
let myName;
//myName : "cp";
console.log(`${proudctName}`);
//3. deklarasi symbol
const sym1 = Symbol("id");
const myOrder = {
    sym1: "123"
};
console.log(myOrder['sym1']);
//4. deklarasi function
function getName(myName) {
    return myName;
}
function calcSalary(salary, overtime) {
    return salary + (overtime * 50000);
}
function logError(message) {
    console.log("log error");
}
//5. union type
function guesWho(who) {
    if (typeof who === "number") {
        return "you're a number";
    }
    if (typeof who === "string") {
        return 'your are string';
    }
    return "";
}
console.log(`${guesWho('dian')}`);
console.log(`${guesWho(1234)}`);
let myPaket = {
    name: "tv",
    height: 12,
    weight: 15
};
console.log(`${myPaket.name} ${myPaket.height} ${myPaket.weight}`);
//# sourceMappingURL=index.js.map