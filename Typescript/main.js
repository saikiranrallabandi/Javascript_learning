"use strict";
exports.__esModule = true;
var isBeginner = true;
var total = 0;
var name = 'Vishwas';
var sentence = "My name is ".concat(name, "\nI am a beginner in Typescript");
console.log(sentence);
var list1 = [1, 2, 3];
var list2 = [1, 2, 3]; //arrays
var person1 = ["saikirna", 22]; //tuples
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
; //enum is set the value
var c = Color.Green;
console.log(c);
var randomvalue = 10;
randomvalue = true;
randomvalue = "saikiran";
var myVariable = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
// (myVariable as string).toUpperCase();
var multiType;
multiType = 20;
multiType = true;
var add = function (num1, num2) { return num1 + num2; };
var fullname = function (person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
};
var p = {
    firstName: 'Saikiran',
    lastName: "rallabandi"
};
fullname(p);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.employeeName, " "));
    };
    return Employee;
}());
var emp1 = new Employee('sai');
console.log(emp1.employeeName);
emp1.greet();
