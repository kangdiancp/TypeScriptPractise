// data type primitive
/* boolean
number
symbol
any
never
void */

//1. declare basic variable use annotation
const productId: number =10;
const proudctName: string ="TV";
let isAvailble: boolean = false;


//2. without annoty type
let myName : "dian";
//myName : "cp";

console.log(`${proudctName}`);


//3. deklarasi symbol
const sym1 = Symbol("id");
const myOrder ={
    sym1 : "123"
}

console.log(myOrder['sym1']);

//4. deklarasi function
function getName(myName: string):string{
    return myName;
}

function calcSalary(salary: number, overtime:number):number{
    return salary + (overtime * 50_000)
}

function logError(message: string):void{
    console.log("log error");
}

//5. union type
function guesWho(who: any):string{
    if (typeof who === "number" ){
        return "you're a number"
    }
    if (typeof who === "string"){
        return 'your are string'
    }

    return "";
}

console.log(`${guesWho('dian')}`);
console.log(`${guesWho(1234)}`);

//6. alias type
type Height = number;
type Weight = number;

type Paket = {
    name: string;
    height : Height;
    weight : Weight;
}

let myPaket: Paket={
    name :"tv",
    height : 12,
    weight : 15
}

console.log(`${myPaket.name} ${myPaket.height} ${myPaket.weight}`)