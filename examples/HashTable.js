import HashNode from "./HashNode";

export default class HashTable {
    constructor(){
        this.tableSize = 1000;
        this.listArray = new Array(this.tableSize);
        this.listArray.forEach((element) => {
            element = null;
        });
    }
    computeHash(key) {
        let hashValue = 0;
        hashValue = key;
        return hashValue % this.tableSize;
    }
    compare(key1, key2) {
        return key1 - key2;
    }
    insert(key, data) {
        if(data === undefined || data === null) {
            data = key;
        }

        let index = this.computeHash(key);
        let head = this.listArray[index];
        while((head != null)) {
            if(this.compare(head.key, key) === 0) {
                head.data = data;
                return;
            }
            head = head.next;
        }
        this.listArray[index] = new HashNode(key, data, this.listArray[index]);
    }

    remove(key) {
        let index = this.computeHash(key);
        let nextNode;
        let head = this.listArray[index];
        if(head != null && (this.compare(head.key, key) === 0)) {
            this.listArray[index] = head.next;
            return true;
        }
        while(head != null){
            nextNode = head.next;
            if(nextNode != null && this.compare(nextNode.key, key)){
                head.next = nextNode.next;
                return true;
            }
            else{
                head = nextNode;
            }
        }
        return false;
    }

    get(key) {
        const index = this.computeHash(key);
        let head = this.listArray[index];
        while((head!= null)){
            if(this.compare(head.key, key) === 0){
                return head.data;
            }
            head = head.next;
        }
        return null;
    }
}