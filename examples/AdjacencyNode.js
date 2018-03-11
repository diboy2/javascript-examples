export default class AdjacencyNode {
    constructor(source, destination, cost) {
        if(cost === void 0){
            cost = 1;
        }
        this.source = source;
        this.destination = destination;
        this.cost = cost;
        this.next = null;
    }
}