import {
    fibonnaci,
    BinarySearchRecursive
} from "../examples/recursion";


describe("Recursion Interview Questions", () => {
    it("calculates the fibonnaci number", () => {
       expect(fibonnaci(6)).toEqual(8);
    });

    it("returns the index of the value through binary search", () => {
        let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(BinarySearchRecursive(arr, 4)).toBe(3);
        expect(BinarySearchRecursive(arr, 7)).toBe(6);
    });
});