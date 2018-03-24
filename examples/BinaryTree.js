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
        let currentNode = new TreeNode(array[start], null, null);
        let left = 2 * start + 1;
        let right = 2 * start + 2;
        if(left < size){
            currentNode.leftChild = this.levelOrderBinaryTreeUtil(array, left);
        }
        if(right < size) {
            currentNode.rightChild = this.levelOrderBinaryTreeUtil(array, right);
        }

        return currentNode;
    }

    preOrderTraversal() {
        let array = [];
        this.preOrderTraversalUtil(array, this.root);
        return array;
    }

    preOrderTraversalUtil(array, node) {
        if(node != null){
            array.push(node.value);
            this.preOrderTraversalUtil(array, node.leftChild);
            this.preOrderTraversalUtil(array, node.rightChild);
        }
    }

    postOrderTraversal() {
        let array = [];
        this.postOrderTraversalUtil(array, this.root);
        return array;
    }

    postOrderTraversalUtil(array, node){
        if (node != null) {
            this.postOrderTraversalUtil(array, node.leftChild);
            this.postOrderTraversalUtil(array, node.rightChild);
            array.push(node.value);
        }
    }

    inOrderTraversal() {
        let array = [];
        this.inOrderTraversalUtil(array, this.root);
        return array;
    }

    inOrderTraversalUtil(array, node) {
        if (node != null) {
            this.inOrderTraversalUtil(array, node.leftChild);
            array.push(node.value);
            this.inOrderTraversalUtil(array, node.rightChild);

        }
    }
}