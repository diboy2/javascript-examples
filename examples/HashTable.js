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

    insert(key, data) {
        if(data === undefined || data === null) {
            data = key;
        }

        let index = this.computeHash(key);
        let 
    }


}