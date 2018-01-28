import {
    Vehicle,
    Car
} "../examples/es-classes";

describe("Vehicle", () => {
    let vehicle;
    beforeEach(() => {
        vehicle = new Vehicle("Christy", "train");
    });

    it("should have Christy as a name", () => {
        expect(vehicle.name).toEqual("Christy");
    });
});
