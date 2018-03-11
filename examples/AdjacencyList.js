import Queue from "./Queue";

export default class AdjacencyList {
    constructor(count) {
        this.count = count;
        this.array = new Array(count);
        let i = 0;

        for(;i < count; i++) {
            this.array[i] = new AdjacencyList();
        }
    }

    compareCost(x, y) {
        if(typeof x === "AdjacencyNode" && typeof y === "AdjacencyNode") {
            return x.cost - y.cost;
        }
    }

    addEdge(source, destination, cost) {
        if( cost === void 0 ) {
            cost = 1;
        }

        const node = new AdjacencyNode(source, destination, cost);

        node.next = this.array[source].head;
        this.array[source].head = node;
    }

    addBiEdge(source, destination, cost) {
        this.addEdge(source, destination, cost);
        this.addEdge(destination, source, cost);
    }

    DFSRec ( graph, index) {
        const count = graph.count;
        const visited = new Array(count);
        let i;
        for(i = 0; i < count; i++) {
            visited[i] = 0;
        }

        visited[index] = 1;
        DFSRecUtil(graph, index, visited);
    }

    DFSRecUtil(graph, index, visited) {
        let head = graph.array[index].head;

        while(head != null){
            if(visited[head.destination] === 0){
                this.DFSRecUtil(graph, head.destination, visited);
            }
            head = head.next;

        }
    }

    BFS(graph, index) {
        const count = graph.count;
        const visited = new Array(count);
        let i;
        for (i = 0; i < count; i++) {
            visited[i] = 0;
        }
        let current;
        const queue = new Queue();
        visited[index] = 1;
        queue.add(index);
        while(queue.isEmpty() === false) {
            current = queue.remove();
            let head = graph.array[current].head();
            while(head != null) {
                if(visited[head.destination] === 0) {
                    visited[head.destination] = 1;
                    queue.add(head.destination);
                }
                head = head.next;
            }
        }
    }
}