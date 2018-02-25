import {
    BubbleSort,
    InsertionSort,
    SelectionSort
} from "../examples/sort";

describe("sort", () => {
    let unsortedArray;
    let sortedArray;
    beforeEach(() => {
        unsortedArray = [6,4,5,1,8,2,9,7,10,3];
        sortedArray = [1,2,3,4,5,6,7,8,9,10];
    });

    it("BubbleSort should sort", () => {
        const bubbleSort = new BubbleSort(unsortedArray);
        bubbleSort.sort();
        expect(sortedArray).toEqual(bubbleSort.array);
    });

    it("InsertionSort should sort", () => {
        const insertionSort = new InsertionSort(unsortedArray);
        insertionSort.sort();
        expect(sortedArray).toEqual(insertionSort.array);
    });

    it("SelectionSort should sort", () => {
        const selectionSort = new SelectionSort(unsortedArray);
        selectionSort.sort();
        expect(sortedArray).toEqual(selectionSort.array);
    });
});