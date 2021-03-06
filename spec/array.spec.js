import {sumArray, sequentialSearch, binarySearch, rotateArray} from "../examples/array";

describe("Array Interview Questions", () => {
    it("sum all the elements of an array", ()=> {
        let arr = [2, 3, 4, 5];
        expect(sumArray(arr)).toBe(14);
    });

    it("search an array for a given value", () => {
        let arr = [5,4,3,2,1];
        expect(sequentialSearch(arr, 2)).toBe(3);
    });

    it("use binary search to find the index of a given value", () => {
        let arr = [1,2,3,4,5,6,7,8,9,10];
        expect(binarySearch(arr,4 )).toBe(3);
        expect(binarySearch(arr, 7)).toBe(6);
    });

    it("rotates the array by an index", () => {
        let arr = [10,20,30,40,50,60];

        rotateArray(arr, 6, 2);
        expect(arr).toEqual([30,40,50,60,10,20]);
    });
});

