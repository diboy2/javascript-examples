import BinarySearchTree from "../examples/BinarySearchTree";

describe("BinarySearchTree", () => {
    let binarySearchTree;
    beforeEach(() => {
        binarySearchTree = new BinarySearchTree();
    });

    it("create a binaryTree Search Tree", () => {
        const sortedArray = [0,1,2,3,4,5,6];
        binarySearchTree.createBinaryTree(sortedArray);
        let leftPointer = binarySearchTree.root;
        let rightPointer = binarySearchTree.root;
        expect(leftPointer.value).toBe(3);
        expect(rightPointer.value).toBe(3);

        leftPointer = leftPointer.leftChild;
        rightPointer = rightPointer.rightChild;

        expect(leftPointer.value).toBe(1);
        expect(rightPointer.value).toBe(5);

        expect(leftPointer.leftChild.value).toBe(0);
        expect(leftPointer.rightChild.value).toBe(2);
        expect(rightPointer.leftChild.value).toBe(4);
        expect(rightPointer.rightChild.value).toBe(6);
    });
});