

class Node {
    constructor(v, n) {
        if((typeof v === 'number') && ((n != null && n instanceof Node) || n === null)) {
            this.value = v;
            this.next = n;
        }
        else if ((typeof v === 'number') && n === undefined) {
            this.value = v;
            this.next = null;
        }
        else {
            throw new Error("Invalid argument");
        }
    }
}

export default class LinkedList{
    constructor(){
        this.length = 0;
    }

    size() {
        return this.length;
    }

    isEmpty() {
        return this.length === 0;
    }

    addHead(value){
        this.head = new Node(value, this.head);
        this.length++;
    }

    addTail(value){
        let pointer = this.head;
        if(this.head === null){
            this.head = new Node(value, null);
        }
        else {
            while(pointer != null) {
                pointer = pointer.next;
            }
            pointer.next = new Node(value, null);
        }
    }

    print() {
        let pointer = this.head;
        while(pointer !== null) {
            console.log(pointer.value + " ");
            pointer = pointer.next;
        }
    }

    sortedInsert(value){
        let pointer = this.head;
        const newNode = new Node(value, null);
        if(pointer === null && pointer.value > value) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        else{
            while(pointer.value < value && pointer.next != null){
                pointer = pointer.next;
            }
            newNode.next = pointer.next;
            pointer.next = newNode;
        }
    }

    isPresent(value) {
        let pointer = this.head;
        while(pointer != null){
            if(pointer.value === value){
                return true;
            }
            pointer = pointer.next;
        }
        return false;
    }

    removeHead() {
        let pointer = this.head;
        if(this.isEmpty()) {
            throw new Error("EmptyList Error");
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.length--;
        return value;
    }

    deleteNode(value) {
        let pointer = this.head;
        if(this.isEmpty()) {
            return false;
        }

        if(value === this.head.value) {
            this.head = this.head.next;
            this.length--;
            return true;
        }

        while((pointer.next != null)) {
            if(pointer.next.value === value) {
                pointer.next = pointer.next.next;
                this.length--;
                return true;
            }
            pointer = pointer.next;
        }
        return false;
    }
}