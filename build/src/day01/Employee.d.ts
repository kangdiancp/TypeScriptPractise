declare class Employees {
    empId?: number;
    firstName?: string;
    lastName?: string;
    constructor();
    constructor(empId: number, firstName: string, lastName: string);
}
declare let emp1: Employees;
declare let emp2: Employee;
declare class Car {
    carId: string;
    private rpm;
    constructor(carId: string, rpm: number);
    getRpm(): number;
    setRpm(rpm: number): void;
}
declare let myCar: Car;
