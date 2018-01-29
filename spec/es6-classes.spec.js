import {
    Vehicle,
    Car
} from "../examples/es6-classes";

describe("Vehicle", () => {
    let vehicle;
    beforeEach(() => {
        vehicle = new Vehicle("Christy", "train");
    });

    it("should have Christy as a name", () => {
        expect(vehicle.name).toEqual("Christy");
    });

    it("should be of type train", () => {
        expect(vehicle.type).toEqual("train");
    });
});

describe("Car", () => {
    let car;
    beforeEach(() => {
        car = new Car("Joe");
    });

    it("should be of type car", () => {
        expect(car.type).toEqual("car");
    });
});