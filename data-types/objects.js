const hasNegativeNumbers = [1, 2, 3, -1, 4].some(item => item < 0);
console.log(hasNegativeNumbers);
const allPostiveNumbers = [1, 2, 3].every(item => item > 0);
console.log(allPostiveNumbers);

//find 
const objects = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
const found = objects.find(item => item.id === 'b');
console.log(found)
const foundIndex = objects.findIndex(item => item.id === 'b');
console.log(foundIndex);

const increment = (number, value = 1) => number + value;
console.log(increment(5, 2));
const sum = (...args) => args.reduce((a, b) => a + b, 0);
console.log(sum(1, 2, 8));

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(() => {
    arr2 = [...arr1];
    arr1[0] = 'potato';
})();

console.log(arr2);

const AVG_TEMP = {
    today: 77.5,
    tomorrow: 79
};
const getTempOfTmrw = (avgTemp) => {
    "use strict";
    const { tomorrow: tempOfTom } = avgTemp;
    return tempOfTom
}
console.log(getTempOfTmrw(AVG_TEMP));
const createPerson = (name, age, gender) => ({ name, age, gender });
console.log(createPerson("Zodiac", 56, "male"));

const bicycle = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);

class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}

var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet);