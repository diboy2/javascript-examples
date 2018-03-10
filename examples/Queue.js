import Node from "./Node";

export default class Queue {
    constructor(){
        this.head = null;
        this.tail = this.head;
        this.length = 0;
    }

    size() {
        return this.length;
    }

    isEmpty() {
        return this.length === 0;
    }

    peek() {
        if(this.isEmpty()) {
            throw new Error("StackEmptyError");
        }
        return this.head.value;
    }

    add(value) {
        let temp = new Node(value, null);
        if(this.head === null) {
            this.head = this.tail = temp;
        }
        else{
            this.tail.next = temp;
            this.tail = this.tail.next;
        }
        this.length++;
    }

    remove() {
        if(this.isEmpty()) {
            throw new Error("StackEmptyError");
        }

        const value = this.head.value;
        this.head = this.head.next;
        this.length--;
        return value;
    }

}