"use strict";
let p1 = {
    firstName: "code",
    lastName: "id",
    age: 18,
    sayHello() {
        console.log("void");
    }
};
console.log(`${p1.sayHello()}`);
class Carx {
    constructor() {
        this.brand = "";
        this.type = "";
    }
    isiElectric() {
        throw new Error("Method not implemented.");
    }
    isiBensin() {
        throw new Error("Method not implemented.");
    }
    startEngine() {
        throw new Error("Method not implemented.");
    }
    stopEngine() {
        throw new Error("Method not implemented.");
    }
    brake() {
        throw new Error("Method not implemented.");
    }
    accelarate(speed) {
        throw new Error("Method not implemented.");
    }
}
//# sourceMappingURL=Interface.js.map