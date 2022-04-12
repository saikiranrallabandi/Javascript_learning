export {}

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Vishwas';

let sentence: string = `My name is ${name}
I am a beginner in Typescript`;

console.log(sentence);

let list1: number[] = [1,2,3]
let list2: Array<number> = [1,2,3] //arrays
let person1 : [string, number] = ["saikirna", 22]; //tuples

enum Color {Red, Green, Blue}; //enum is set the value
let c: Color = Color.Green;
console.log(c)

let randomvalue: any = 10;
randomvalue = true;
randomvalue = "saikiran";

let myVariable: unknown = 10;

function hasName(obj: any): obj is { name: string } {
    return !!obj &&
       typeof obj === "object" &&
       "name" in obj
}

if (hasName(myVariable)) {
    console.log(myVariable.name);
}
// (myVariable as string).toUpperCase();

let multiType: number | boolean;
multiType = 20;
multiType = true;

const add = (num1, num2) => num1 + num2;

interface Person {
    firstName: string;
    lastName: string;
}

const fullname = (person: Person) => {
     console.log(`${person.firstName} ${person.lastName}`)
}

let p = {
    firstName: 'Saikiran',
    lastName: "rallabandi"
};

fullname(p);

class Employee {
    employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Good Morning ${this.employeeName} `)
    }
}
let emp1 = new Employee('sai');
console.log(emp1.employeeName);
emp1.greet()
