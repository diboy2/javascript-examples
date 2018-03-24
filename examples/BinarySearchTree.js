import TreeNode from "./TreeNode";

export default class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    createBinaryTree(sortedArray) {
        this.root = this.createBinaryTreeUtil(sortedArray, 0, sortedArray.length - 1);
    }

    createBinaryTreeUtil(sortedArray, start, end)
    {
        if(start > end)
            return null;
        const mid = Math.floor((start + end) / 2);
        const node = new TreeNode(sortedArray[mid], null, null);
        node.leftChild = this.createBinaryTreeUtil(sortedArray, start, mid - 1);
        node.rightChild = this.createBinaryTreeUtil(sortedArray, mid + 1, end);
        return node;
    }
}