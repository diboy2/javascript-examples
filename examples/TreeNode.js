export default class TreeNode {
    constructor(value, lChild, rChild) {
        if(((typeof value === "number")) && ((lChild instanceof TreeNode) || lChild === null) && ((rChild instanceof TreeNode) || rChild === null)) {
            this.value = value;
            this.leftChild = lChild;
            this.rightChild = rChild;
        }
        else if ((typeof value === "number") && lChild === undefined && rChild === undefined ) {
            this.value = value;
            this.leftChild = null;
            this.rightChild = null;
        }
        else {
            throw new Error("invalid input arguments");
        }
    }
}