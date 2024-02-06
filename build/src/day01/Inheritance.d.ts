declare abstract class PersonAbstract {
    fullName: string;
    age: number;
    constructor(fullName: string, age: number);
    sayHello(name: any): void;
}
declare class Employee extends PersonAbstract {
    empId: number;
    constructor(empId: number, fullName: string, age: number);
    sayHello(name: any): void;
}
declare class Programmer extends Employee {
    skill: string;
    constructor(empId: number, fullName: string, age: number, skill: string);
    sayHello(name: any): void;
}
declare class Contract extends Employee {
    overtime: number;
    constructor(empId: number, fullName: string, age: number, overtime: number);
}
declare class Customer extends PersonAbstract {
    customerId: number;
    fullName: string;
    age: number;
    constructor(customerId: number, fullName: string, age: number);
}
declare let emp3: Employee;
declare let emp4: Programmer;
declare let emp5: Employee;
declare const listEmployee: PersonAbstract[];
