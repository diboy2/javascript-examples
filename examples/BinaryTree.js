import TreeNode from "./TreeNode";

export default class BinaryTree {
    constructor(dataArray) {
        this.root = null;
        this.dataArray = dataArray;
    }

    levelOrderBinaryTree() {
        this.root = this.levelOrderBinaryTreeUtil(this.dataArray, 0);
    }

    levelOrderBinaryTreeUtil(array, start) {
        const size = array.length;
        let currentNode = new TreeNode(array[start]);
        let left = 2 * start + 1;
        let right = 2 * start + 2;

        currentNode.leftChild = this.levelOrderBinaryTreeUtil(array, left);
        currentNode.rightChild = this.levelOrderBinaryTreeUtil(array, right);
        return currentNode;
    }

    preOrderTraversal() {
        let array = [];
        this.preOrderTraversalUtil(array, this.root);
        return array;
    }

    preOrderTraversalUtil(array, node) {
        array.push(node.value);
        preOrderTraversalUtil(array, node.leftChild);
        preOrderTraversalUtil(array, node.rightChild);
    }

    postOrderTraversal() {
        let array = [];
        this.postOrderTraversalUtil(array, this.root);
        return array;
    }

    postOrderTraversalUtil(array, node){
        postOrderTraversalUtil(array, node.leftChild);
        postOrderTraversalUtil(array, node.rightChild);
        array.push(node.value);
    }

    inOrderTraversal() {
        let array = [];
        this.inOrderTraversalUtil(array, this.root);
        return array;
    }

    inOrderTraversalUtil(array, node) {
        this.inOrderTraversalUtil(array, node.leftChild);
        this.inOrderTraversalUtil(array, node.rightChild);
        array.push(node.value);
    }



}