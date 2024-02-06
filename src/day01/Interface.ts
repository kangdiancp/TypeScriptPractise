interface People{
    firstName?: string;
    lastName?: string; 
    age: number;
    sayHello():void
}

let p1:People ={
    firstName:"code",
    lastName:"id",
    age:18,
    sayHello(){
        console.log("void")
    }
}

console.log(`${p1.sayHello()}`)

interface Vehicle{
    brand: string;
    type : string;
    startEngine():boolean;
    stopEngine():boolean;
    brake():boolean;
    accelarate(speed:number):void;
}

interface BahanBakar{
    isiElectric():boolean
    isiBensin():boolean
}

class Carx implements Vehicle, BahanBakar{
    
    isiElectric(): boolean {
        throw new Error("Method not implemented.");
    }
    isiBensin(): boolean {
        throw new Error("Method not implemented.");
    }
    brand: string=""
    type: string=""

    startEngine(): boolean {
        throw new Error("Method not implemented.");
    }
    stopEngine(): boolean {
        throw new Error("Method not implemented.");
    }
    brake(): boolean {
        throw new Error("Method not implemented.");
    }
    accelarate(speed: number): void {
        throw new Error("Method not implemented.");
    }

}