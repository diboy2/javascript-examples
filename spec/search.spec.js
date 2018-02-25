import {
    linearSearchUnsorted, linearSearchSorted,
    binarySearch
} from "../examples/search";

describe("search", () => {

    it("should do a linear search for an unsorted array", () => {
        const arr = [4,32,7,234,123,43,54];

        expect(linearSearchUnsorted(arr, 123)).toBeTruthy();
        expect(linearSearchUnsorted(arr, 200)).toBeFalsy();
    });

    it("should do a linear search for a sorted array", () => {
        const arr = [3, 43, 53, 100, 234, 534, 600, 601];

        expect(linearSearchSorted(arr, 43)).toBeTruthy();
        expect(linearSearchSorted(arr, 602)).toBeFalsy();

    });

    it("should do a binary search for a sorted array", () => {
        const arr = [3, 6, 10, 24, 44, 55, 67, 88, 93, 101];

        expect(binarySearch(arr, 44)).toBeTruthy();
    });
});