interface People {
    firstName?: string;
    lastName?: string;
    age: number;
    sayHello(): void;
}
declare let p1: People;
interface Vehicle {
    brand: string;
    type: string;
    startEngine(): boolean;
    stopEngine(): boolean;
    brake(): boolean;
    accelarate(speed: number): void;
}
interface BahanBakar {
    isiElectric(): boolean;
    isiBensin(): boolean;
}
declare class Carx implements Vehicle, BahanBakar {
    isiElectric(): boolean;
    isiBensin(): boolean;
    brand: string;
    type: string;
    startEngine(): boolean;
    stopEngine(): boolean;
    brake(): boolean;
    accelarate(speed: number): void;
}
