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
