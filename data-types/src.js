/* 
undefined, null, boolean, string, symbol, number, and object
*/

const { promised } = require("q");

var myname = "saikiran"; // it can be used through out program

let ourName = "sai"; // it can be used within the scope where you declare that

const pi = 3.14; // const is a variable that can never changed


/* declaring and assignment */
var a;
var b = 2;
console.log(a);
a = 7;
b = a;
console.log(a);

/* Initializing variables w/ Assignment Operator */
var a = 9;

/* uninitialized these variables */
var a;
var b;
var c;

/* Case sensitivity in Variables --> Capitializations matters*/

// Declaration
var studyCapVar;
var properCamelCase;
var titleCaseOver;

// Assignments

studyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;


// Adding numbers 

var sum = 10 + 0;
console.log(sum);

//subtraction

var difference = 45 - 33;

//multiplication

var product = 8 * 10;

//Divide 

var quotient = 66 / 22;

// Incrementing Numbers

var myVar = 87;

//Only change code below this line 
myVar++;
console.log(myVar);

//decrement

var myVar = 11;

myVar--;
console.log(myVar);

//Remainder;

var remainder;
remainder = 11 % 3;
console.log(remainder);

// Compound Assignment with Augmented Addition 
var a = 3;
var b = 17;
var c = 12;

a = a + 12;
a += 12;
b = b + 17;
b += 17;
c = c + 12;
c += 12;


//Declare String variables
var firstName = "Alan";
var lastName = "Turing";

//Escaping Literal Quotes in String
var myStr = " I am a \" double quotes \""
console.log(myStr);

//Qutation Strings with Single Quotes//

var myStr = `'<asdasdsadasdsd"asdasdsds"'`;
console.log(myStr);

//Escape Sequence in Strings
/***
 * \' single quote
 * \" double quote
 *  \\ backslash
 *  \n newline
 * \r carriage return
 *  \t tab
 *  \b backspace
 *  \f form feed
 */

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"
console.log(myStr);

//Concatenating Strings with Plus Operator
var ourStr = "I come first. ";
ourStr += "This is the second";
console.log(ourStr);

//Constructing Strings with Variables
var ourNames = "saikiran";
var mystr = "aadya" + ourNames + "lavanya";
console.log(mystr);

//Append strings 
var anAdjective = "awesome";
var ourStr = "freecodecam is";
ourStr += anAdjective;

console.log(ourStr);

//Find Length Of String

var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;
console.log(firstNameLength);

//Bracket Notation to find First Character in String

[0];

//String Immutability

//Bracket Notation to find Last Character in String

var firstName = "AADYA"
var lastletteroffirstname = firstName[firstName.length - 1];
console.log(lastletteroffirstname);

//Word Blanks

function wordBlank(myNound, myAdjective, myVerb, myAdverb) {

    var result = "";
    result += "The" + myNound + myAdjective + myVerb + myAdverb
        //return
    return result;
}
console.log(wordBlank("dog", "big", "ran", "quickly"));

//Store Multiple Values with Arrays

var ourArray = ["John", 23];

var myArray = ["quency", 1];


//Nested Arrays

var ourArray = [
    ["saikiran", 34],
    ["aadya", 45],
    ["lavanya", 89]
];
console.log(ourArray);

// Access Array Data with Indexes
var ourArray = [50, 60, 70];
var ourData = ourArray[0];
console.log(ourData);

//Modify arrays

var ourArray = [18, 64, 99];
ourArray[3] = 78;
console.log(ourArray);

//Access Muti-Dimensioanl Arrays with Indexes
var myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [
        [10, 11, 12], 13, 14
    ]
];
var myData = myArray[2][1];
console.log(myData);

//Manipulate Arrays with push() add items

var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
console.log(ourArray);

// Manipulate Arrays with pop() remove
var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop();

console.log(removedFromOurArray);

//Manipulate arrays with shift removes first element
var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.shift();

console.log(removedFromOurArray);

//Manipulate Arrays with unshift is similar to push array it will add to begin of the array
var ourArray = [1, 2, 3];
ourArray.unshift("2");

console.log(ourArray);

//reusable code in javascript
function ourReusableFunction() {
    console.log("Heyya, world");
}
ourReusableFunction();

//Passing Values to Function with Arguments
function fwa(a, b) {
    console.log(a * b);
}
fwa(1, 2);

//Global Scope(refers to visibility of variables) and Functions
var myGlobal = 5;

function f1() {
    oopsglobal = 6;
}

function f2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myglobal: " + myGlobal
    }
    if (typeof oopsglobal != "undefined") {
        output += "oopsglobal: " + oopsglobal
    }
    console.log(output);

}
f1();
f2();

//Global vs local -> Local variable takes the president over global variable
var outerwear = "tshirt";

function myoutfit() {
    var outerwear = "swe"
    return outerwear
}
console.log(myoutfit());

//Return a value from a Function with Return

function minusSeven(num) {
    return num - 7;
}
console.log(minusSeven(10));

//Understanding Undefined Value Returned from a Function

var sum = 0;

function addThree() {
    sum += 3;
}

function addFive() {
    sum += 5;

}

//Assignment with a Returned Value
// var changed = 0;

// function changed(num) {
//     return (num + 5) / 3;
// }

// var changed = changed(10);

// var processed = 0;

// function processedArg(num) {
//     return (num + 3) / 5;
// }

// var processed = processedArg(7);

// Stand in Line

function nextLine(arr, item) {
    arr.push(item);
    return arr.shift();
}
var testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//Boolean datatypes

function welcomeToBooleans() {
    return false;
}

//Use Conditional Logic with If statements

function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}

function trueOrFalse(wasThatTrue) {

    if (wasThatTrue) {
        return "Yes, that was true";
    }

    return "No, that was false";

}

console.log(trueOrFalse(true));

//Comparison with the Equality Operator
function testEqual(val) {
    if (val == 12) {
        return "true";
    } else {
        return "false";
    }
}
console.log(testEqual(10));

//Comparison with the Strict Equality Operator : does not compare typeof
function testEqual(val) {
    if (val === 12) {
        return "true";
    } else {
        return "false";
    }
}
console.log(testEqual("10"));

//Comparisions with the Logical And Operator 
function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }

    if (val > 10) {
        return "Over 10";
    }

    return "10 or Under";
}

console.log(testGreaterThan(101));

//Comparison with the Greater Than or Equal To Operator
function testGreaterorequal(val) {
    if (val >= 100) {
        return "Over 100";
    }

    if (val >= 10) {
        return "Over 10";
    }

    return "Less than 10";
}

console.log(testGreaterorequal(10));

//Comparisons with the Logical And Operator
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}

console.log(testLogicalAnd(124));
//Gold code
var names = ["Hole-in-one", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey"]
    //Switch statements insted of chain if else we can use switch

function caseInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "ghamma";
            break;
        case 4:
            answer = "delta";
            break;

    }

    return answer;
}
console.log(caseInSwitch(4));


//Returning Early Pattern from Function
function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(-2, 2));
//Build JavaScript Object
var ourDog = {
    "name": "Tommy",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]
};
//Accessing Object Properties with Dot Notation
var ourDog = {
    "name": "Tommy",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]
};
var Name = ourDog.name
console.log(Name);
//Accessing Object Properties with Bracket Notation
var ourDog = {
    "name": "Tommy",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]
};
console.log(ourDog["legs"]);
//updating object Properties
var ourDog = {
    "name": "Tommy",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]
};
ourDog.name = "scoobydo"
console.log(ourDog["name"]);
//Add new properties to an Object
var ourDog = {
    "name": "Tommy",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]
};
//delete new properties to an object
var ourDog = {
    "name": "Tommy",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]
};
const deleted_OurDog = delete ourDog.legs;

console.log(ourDog);
//Using Objects for Lookups
function phonelookup(val) {
    var result;

    var lookup = {
        "name": "Tommy",
        "legs": 4,
        "tails": 1,
        "friends": ["everything"]
    };
    result = lookup[val];
    return result;

}
console.log(phonelookup("friends"));
//Testing Objects for Properties
var lookup = {
    "name": "Tommy",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]
};

function checkObj(checkProp) {
    if (lookup.hasOwnProperty(checkProp)) {
        return true;
    } else {
        return false
    }
}
console.log(checkObj("friends"));
//Manipulating Complex Object
var myMusic = [{
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CS",
            "8T",
            "LP"
        ],
        "gold": true
    },
    // Add record here
    {
        "artist": "Billy Joel",
        "formats": [
            "CS",
            "8T",
            "LP"
        ],
        "gold": true
    }

];
//Accessing nested Object
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["passenger seat"];
``
console.log(gloveBoxContents);

//Accessing Nested Arrays
var myPlants = [{
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    },
    {
        type: "trees",
        list: [
            "s",
            "pine",
            "birch"
        ]
    }
];
var secondTree = myPlants[2].list[0];
console.log(secondTree);
//Record collections
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};

//keep a copy of object 
var collectionCopy = JSON.parse(JSON.stringify(collection));
//function with three values
function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        //create property if it does'nt exists
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }
    return collection;
}

//alter values before test code
console.log(updateRecords(5439, "artists", "sai"));
// Iterate with while loops
var myArray = [];

var i = 0;
while (i < 5) {
    myArray.push(i);
    i++;
}
console.log(myArray);
// Iterate with for loops
var ourArray = [];
for (var i = 0; i < 5; i++) {
    ourArray.push(i);
}
console.log(ourArray);

//Iterate Odd Numbers with a For Loop
var ourArray = [];
for (var i = 1; i < 10; i += 2) {
    ourArray.push(i);
}
console.log(ourArray);
// Count Backwards with a For Loop
var ourArray = [];
for (let index = 10; index > 0; index -= 2) {
    ourArray.push(index);
}
console.log(ourArray);
//Iterate through an Array with a For loop
var ourArray = [2, 4, 5, 645, 656, 6453534, 646464646, 454545];
var total = 0;
for (let index = 0; index < ourArray.length; index++) {
    total += ourArray[index];
}
console.log(total);
//Nesting for loops
function multiplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}
var product = multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7]
]);
console.log(product);
//Iterate with Do .. while Loops --> While checks the condition before it runs the loop, and do while loop always run atleast one time and then check the condition
var ourArray = [];
var i = 10;
do {
    ourArray.push(i);
    i++;
} while (i < 5)
console.log(i, ourArray);
//Profile lookup
var contacts = [{
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

var myfunction = function loopupprofile(name, prop) {
    for (var index = 0; index < contacts.length; index++) {
        if (contacts[index].firstName === name) {
            return contacts[index][prop] || "no such property";
        }

    }
    return "No such contact";
}

var data = myfunction("Akiras", "likess");
console.log(data);
//generate random fractions

var myfunction = function randomFraction() {
    return Math.random();
}
console.log(myfunction());

//generate random whole number
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());
//Generate Random whole numbers within a range
function ourRandomRange(ourMin, ourMax) {
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
console.log(ourRandomRange(1, 9));

/*
clg for console.log(object);
clo for console.log('object :', object);
ccl for console.clear(object);
cer for console.error(object);
ctr for console.trace(object);
clt for console.table(object);
cin for console.info(object);
cco for console.count(label);
*/

//Use the parseInt function

function convertToInter(str) {
    return parseInt(str);
}
console.log("67")

function convertToInter(str) {
    return parseInt(str, 2);
}
console.log("10011");

//use the conditional Ternary Operator
// condition ? statement-if-true : statement-if-false;

function checkEqual(a, b) {
    return a === b ? true : false;
}
console.log(checkEqual(1, 1));

//Use multiple conditional Ternary Operator
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log(checkSign(0));
//Differences Between the var and let Keywords

let catName = "Quincy";
let quote;

catName = "Beau";

function catTalk() {
    "use strict"; // create this to avoid the coding mistakes

    catName = "Oliver";
    quote = catName + " says Meow!";
}

catTalk();

//compare scopes of the var and let keywords
// let is blocklevel/statement scope --> var is global
function checkScope() {
    "use strict";
    var i = "function scope";

    if (true) {
        var i = "block scope";
        console.log("Block scope: ", i);
    }
    console.log("Function scope is :", i);
    return i;
}
checkScope();

//Declare a Read-only variable with the const keyword
function primaryManyTimes(str) {
    "use strict";

    const SENTENCE = str + " is cool";
    for (let index = 0; index < str.length; index += 2) {
        console.log(SENTENCE);
    }

}
primaryManyTimes("freeCodecamp");
//Mutate an Array Declared with const
const s = [5, 7, 2]

function editInPlace() {
    "use strict";
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;

}
editInPlace();
console.log(s);
//Prevent Object Mutation
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS);
    try {
        MATH_CONSTANTS.PI = 99;

    } catch (error) {
        console.log(error)
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
console.log(PI);
//Use Arrow Functions to Write Concise Anonymous Functions
//Anonymous function is a function which does'nt consists of name

var magic = function() {
    return new Date();
};
const MAGIC = () => new Date();
console.log(MAGIC());
//Write Arrow Functions with Parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));
//Write Higher Order Arrow Functions --> Map filter reduce
//example-1
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
    //for each number in the array --> we are using map for this.
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);


const myArray = [1, 2, 3, 4];
myArray.forEach((item, index) => {
    console.log(item, index)
});

const doubled = myArray.map(item => item * 2)
console.log(doubled);

const int = myArray.filter(num => num % 2 === 0);
console.log(int)

const sum = myArray.reduce((result, item) => x = result + item);
console.log(sum);





//example-2
const increment = (function() {
    return function increment(number, value = 1) {
        return number + value;
    };
})();
console.log(increment(5, 2));
console.log(increment(5));

//Use the Rest Operators with Function Parameters --> Rest operator takes the number of variable arguments

const sumsss = (function() {
    return function sumsss(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sumsss(1, 2, 3))

//Use the Spread Operator to Evaluate Arrays In-Place.
const arr1 = ['JAN', 'FEB'];
let arr2;
(function() {
    arr2 = [...arr1];
    arr1[0] = 'potato';
})();
console.log(arr2);

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(() => {
    arr2 = [...arr1];
    arr1[0] = 'potato';
})();

console.log(arr2);

//Use Destructive Assignment to Assign Variables from Objects
var voxel = { x: 3.6, y: 7.4, z: 6.54 }
    // const { x: a, y: b, z: c } = voxel;

const AVG_TEMP = {
    today: 77.5,
    tomorrow: 79
}

// function getTempOfTmrw(avgTemp) {
//     "use strict";
//     const { tomorrow: tempOfTom } = avgTemp;
//     return tempOfTom;

// }

//const MAGIC = () => new Date();
const getTempOfTmrw = (avgTemp) => {
    "use strict";
    const { tomorrow: tempOfTom } = avgTemp;
    return tempOfTom;
}


console.log(getTempOfTmrw(AVG_TEMP));
// Destructuring Assignment with Nested Objects;

const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.3 }
}

const getMaxOfTmrw = (forecast) => {
    "use strict";
    const { tomorrow: { min: maxoftmrw } } = forecast;
    return maxoftmrw;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST));
//use Destructive Assignment to Assign variables from Arrays
const [z, x, , y] = [1, 2, 3, 4, 5, 6]
console.log(z, x, y)

let as = 8,
    bs = 6;
(() => {
    "use strict";
    [as, bs] = [bs, as]
})();
console.log(as);
console.log(bs);
//use destructing Assignment with the rest operator
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const removeFirstTwo = (list) => {
    const [, , ...arr] = list;
    return arr;
}

const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);
//Use destructing Assignment to pass an Object as a Function's Parameters
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};


// const half = (params) => {
//     const { max, min } = params
//     return (max + min) / 2.0
// }
// console.log(half(stats));

const half = (function() {
    return function half({ max, min }) {
        return (max + min) / 2.0;
    }
})();
console.log(half(stats));
// Create Strings using Template Literals;
const person = {
    name: "saikiran Hasbro",
    age: 34
}

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old`
console.log(greeting);

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
const makeList = (arr) => {
    "use strict";
    const resultDisplayArray = [];
    let arrResult = "";
    for (let index of arr) {
        arrResult += index;
        resultDisplayArray.push(`<li class="text-warning">${arrResult}</li>`);

    }
    // for (let index = 0; index < arr.length; index++) {
    //     resultDisplayArray.push(`<li class="text-warning">${arr[index]}</li>`);
    // }
    return resultDisplayArray;
}
const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);
//Write concise Object Literal Declaration Using Simple Fields
const createPerson = (name, age, gender) => ({ name, age, gender });
console.log(createPerson("saikiran", 34, "M"));
//Write concise Declarative functions --> Create object inside function
const bicycle = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);
//Use class Syntax to define a Constructor Function
class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}
var zeus = new SpaceShuttle('jupiter');
console.log(zeus);
//Use getters and setters to control access to an object
const makeClass = () => {
    class Thermostat {
        constructor(temp) {
            this._temp = 5 / 9 * (temp - 32);
        }
        get temperature() {
            return this._temp;
        }
        set temperature(updatedTemp) {
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);
//Understand the difference between import and require

//Use export to reuse a code block

//use * to Import Everything from a file
// import * as somting from "something";

// //create an export fallback with export default

// export default subtract = (x, y) => x - y;

// //import a Default export
// import subtract from "math_functions"

/*//REGULAR EXPRESSIONS*/
//Using the test Method -> It will contains the string that is true or not

let sentence = "The dog chased the cat"
let regex = /the/
let results = regex.test(sentence);
console.log("results", results);

//Match Literal Strings with Different Possibilities
let petString = "James has a pet cas"
let petRegex = /dog|cat|bird|fish/;
// let resultsRegex = petRegex.test(petString);
console.log(petRegex.test(petString));
//Ignore Case while Matching
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
console.log(fccRegex.test(myString));
//Extract matches //Find the More than the first Match
let extractStr = "Extract the word 'coding' from word this string."
let codingRegex = /word/g;
let resultextract = extractStr.match(codingRegex);
console.log(resultextract);
//Match Anything with Wildcard Period
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let hugRegex = /hu./g
console.log(humStr.match(hugRegex));
//Match Single Character with Mutiple Possibilities
let quoteSample = "Beware of bugs in the above code; I have only provided it correctly"
let vowelRegex = /[aeiou]/ig;
console.log(quoteSample.match(vowelRegex));
// Match Letters  of the Alphabet
let quoteSamples = "The quick brown fox jumps over the lazy dog."
let alphabetRegex = /[a-z]/ig
console.log(quoteSamples.match(alphabetRegex))
    //Match Numbers and Letters of the alphabet
let quotesample = "Blueberry 3.1433232 are delicious."
let myRegex = /[0-9a-z]/ig;
let resultquotesample = quotesample.match(myRegex);
console.log(resultquotesample);
//execpt the numbers 
let qs = "3 blind mice."
let mr = /[^0-9aeiou]/ig
console.log(qs.match(mr));
//first occurence match
let dif = "Mississipsi";
let rg = /^m+/ig;
console.log(dif.match(rg));
//Match Characters Lazy match or gredy
let string = "titanic";
let rgx = /t[a-z]*i/;
console.log(string.match(rgx));
//find One or More Criminals in a hunt
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';
let reCriminal = /C+/g;

let matchedCriminals = crowd.match(reCriminal);
console.log(matchedCriminals);
//Match All letters and numbers
// let qsam = "The five boxing wizards jump quickly."
// let alphargxv2 = /\w/g;
// console.log(qsam.match(alphargxv2).length);
//Match everything But Letters and Numbers
let qsam = "The five boxing wizards jump quickly."
let alphargxv2 = /\W/g;
console.log(qsam.match(alphargxv2).length);
//Match All Numbers
let numStr = "Your Sandwich will be $5.00"
    //let numrgx = /\d/g;
    //Match all non-numbers
let numrgx = /\d/g;
console.log(numStr.match(numrgx));
//Restrict Possible Usernames
/*
1) If there are numbers, they must be at the end.
2) Letters can be lowercase and uppercase.
3) At least two characters long. Two-letters names can't have numbers.
*/
let username = "jackOfAllTrades31313"
let userCheck = /^[A-Za-z]{2,}\d*$/;
console.log(userCheck.test(username));
//Match Whitespace
let sample = "Whitespace is important in separating words"
let countWhiteSpace = /\s/g;
console.log(sample.match(countWhiteSpace));
//Match Non-whitespace characters
///\S/g;
// Specify Upper and Lower Number of Matches - with Quantity specifiers
////Oh{3,6} no/
//Check for All or None
//favou?rite
//positive and Negative Lookahead
let quit = "qu";
let noquit = "qt";
let quRegex = /q(?=u)/;
console.log(quit.match(quRegex));

let sampleWord = "ast23";
let pwRegex = /(?=\w{5})(?=\D*\d{2})/; /* not digits consequtive*/
console.log(pwRegex.test(sampleWord));

//Reuse Patterns Using Capture Groups
let repeatStr = "regex regex";
let repeatNum = "42 42 42 42";
let repeatRegex = /(\w+)\s\1/;
let repeatRegexNum = /^(\d+)\s\1\s\1$/;
console.log(repeatRegexNum.test(repeatNum));

//Use Capture Groups to Search and Replace
let wrongText = "The sky is silver";
let silverRegex = /silver/;
console.log(wrongText.replace(silverRegex, "saikiran"));
console.log("saikiran rallabandi".replace(/(\w+)\s(\w+)/, '$2 $1'));

//Remove Whitespace from start and end

// Asynchronous JavaScript

/*
Timeouts and intervals
Callbacks
Promises
async await
Event loop
*/