"use strict";
//blueprint
class Employees {
    constructor(empId, firstName, lastName) { }
}
// create object employee
//default/empty constructor
let emp1 = new Employees();
emp1.empId = 100;
emp1.firstName = "dian";
emp1.lastName = "cp";
console.log(`${emp1.empId}`);
let emp2 = new Employee(101, "rini", 30);
class Car {
    constructor(carId, rpm) {
        this.carId = carId;
        this.rpm = rpm;
    }
    //implementation encapsulation
    getRpm() {
        return this.rpm;
    }
    setRpm(rpm) {
        this.rpm = rpm;
    }
}
let myCar = new Car("B101XU", 140);
console.log(`${myCar.carId} ${myCar.getRpm()}`);
myCar.setRpm(190);
console.log(`${myCar.carId} ${myCar.getRpm()}`);
//# sourceMappingURL=Employee.js.map