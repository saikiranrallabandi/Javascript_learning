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
