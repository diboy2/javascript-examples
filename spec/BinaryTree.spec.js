import BinaryTree from "../examples/BinaryTree";

describe("BinaryTree", () => {
    let binaryTree;
    let dataArray;
    beforeEach(() => {
        dataArray = [0,1,2,3,4,5,6,7];
        binaryTree = new BinaryTree(dataArray);
    });

    it("should populate binary tree", () => {
        const array = [5, 872, 342, 3456, 832, 999];
        binaryTree.dataArray = array;
        binaryTree.levelOrderBinaryTree();

        let leftPointer = binaryTree.root;
        let rightPointer = binaryTree.root;
        expect(leftPointer.value).toBe(5);
        expect(rightPointer.value).toBe(5);

        leftPointer = leftPointer.leftChild;
        rightPointer = rightPointer.rightChild;
        expect(leftPointer.value).toBe(872)
        expect(rightPointer.value).toBe(342);

        expect(leftPointer.leftChild.value).toBe(3456);
        expect(leftPointer.rightChild.value).toBe(832);
        expect(rightPointer.leftChild.value).toBe(999);
    });

    it("should do pre-order traversal", () => {
        binaryTree.levelOrderBinaryTree();
        expect(binaryTree.preOrderTraversal()).toEqual([0,1,3,7,4,2,5,6]);
    });

    it("should do post-order traversal", () => {
        binaryTree.levelOrderBinaryTree();
        expect(binaryTree.postOrderTraversal()).toEqual([7,3,4,1,5,6,2,0]);
    });

    it("should do in-order traversal", () => {
        binaryTree.levelOrderBinaryTree();
        expect(binaryTree.inOrderTraversal()).toEqual([7,3,1,4,0,5,2,6]);
    });
});