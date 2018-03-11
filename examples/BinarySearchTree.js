import TreeNode from "./TreeNode";

export default class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    createBinaryTree(sortedArray) {
        this.root = createBinaryTreeUtil(sortedArray, 0, sortedArray.length - 1);
    }

    createBinaryTreeUtil(sortedArray, start, end)
    {
        if(end >= start)
            return null;
        const mid = Math.floor((start + end) / 2);
        const node = new TreeNode(sortedArray[mid]);
        node.leftChild = createBinaryTreeUtil(sortedArray, start, mid - 1);
        node.rightChild = createBinaryTreeUtil(sortedArray, mid + 1, end);
        return node;
    }
}