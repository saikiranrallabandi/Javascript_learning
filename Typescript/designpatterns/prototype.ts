const zombie = {
    eatBrains() {
        return 'yum';
    }
}

const chad = Object.create(zombie, { name: { value: 'chad'}});
console.log(chad);
chad.eatBrains();
chad.__proto_;
Object.getPrototypeOf(chad);