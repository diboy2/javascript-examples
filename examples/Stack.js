import Node from "./Node";

export default class Stack{
    constructor() {
        this.head = null;
        this.length = 0;
    }

    size() {
        return this.length;
    }

    isEmpty() {
        return this.length === 0;
    }

    push(value){
        this.head = new Node(value, this.head);
        this.length++;
    }

    pop(){
        if(this.isEmpty()){
            throw new Error("StackEmptyError");
        }

        var value = this.head.value;
        this.head = this.head.next;
        this.length--;
        return value;
    }

    top(){
        return this.head.value;
    }

}