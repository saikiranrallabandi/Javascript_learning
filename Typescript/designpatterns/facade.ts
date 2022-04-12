class PlumbingSystem {

    setPressure(v: number) {}
    turnOn() {}
    turnOff() {}
}

class ElectricalSystem {

    setVoltage(v: number) {}
    turnOn() {}
    turnOff() {}
}

class House {
    private plumbing  = new PlumbingSystem();
    public turnOnSystems() {
        this.electrical.setVoltage(120);
    }
}