declare const productId: number;
declare const proudctName: string;
declare let isAvailble: boolean;
declare let myName: "dian";
declare const sym1: unique symbol;
declare const myOrder: {
    sym1: string;
};
declare function getName(myName: string): string;
declare function calcSalary(salary: number, overtime: number): number;
declare function logError(message: string): void;
declare function guesWho(who: any): string;
type Height = number;
type Weight = number;
type Paket = {
    name: string;
    height: Height;
    weight: Weight;
};
declare let myPaket: Paket;
