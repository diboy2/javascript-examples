class Vehicle {
    constructor (name, type) {
        this._name = name;
        this._type = type;
    }
    get name() {
        return this._name;
    }

    set name(newName){
        this._name = newName;
    }

    get type() {
        return this._type;
    }

    set type(newType) {
        this._type = newType;
    }
}

class Car extends Vehicle {
    constructor(name) {
        super(name, "car");
    }

    get name() {
        return "It is a car: " + super.name;
    }
}

let car = new Car("Tesla");
console.log(car.name);
console.log(car.type);