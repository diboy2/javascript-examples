export default class Vehicle {
    constructor(name, type) {
        this._name = name;
        this._type = type;
    }
    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    get type() {
        return this._type;
    }

    set type(newType) {
        this._type = newType;
    }
}