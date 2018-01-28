import Vehicle from "./Vehicle";

export default class Car extends Vehicle {
    constructor(name) {
        super(name, "car");
    }

    get name() {
        return "It is a car: " + super.name;
    }
}

