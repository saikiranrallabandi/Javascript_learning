class HotDog {
    constructor (
        public bun: string,
        public ketchup: boolean,
    ){}

addKetchup() {
    this.ketchup = true;
    return this
}

}

const myLunch = new HotDog('wheat', false); // very hard to implement
myLunch
  .addKetchup()