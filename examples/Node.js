export default class Node {
    constructor(v, n) {
        if ((typeof v === 'number') && ((n != null && n instanceof Node) || n === null)) {
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
