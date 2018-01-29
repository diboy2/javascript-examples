import {sumArray, sequentialSearch} from "../examples/array";

describe("Array Interview Questions", () => {
    it("sum all the elements of an array", ()=> {
        let arr = [2, 3, 4, 5];
        expect(sumArray(arr)).toBe(14);
    });

    it("search an array for a given value", () => {
        let arr = [5,4,3,2,1];
        expect(sequentialSearch(arr, 2)).toBe(3);
    })

});