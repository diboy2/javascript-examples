import Queue from "../examples/Queue";

describe("Queue", () => {
    let queue;
    beforeEach(() => {
        queue = new Queue()
    });

    it("should return length", () => {
        queue.add(938);
        queue.add(67983);
        queue.add(7623);

        expect(queue.size()).toBe(3);
    });

    it("should return true for empty queues", () => {
        expect(queue.isEmpty()).toBeTruthy();
    });

    it("should add values to the queue", () => {
        queue.add(4342342);
        queue.add(3424388);
        queue.add(6);
        queue.add(8);

        expect(queue.head.value).toEqual(4342342);
        expect(queue.tail.value).toEqual(8);
    });

    it("should remove a value from a queue ", () => {
        queue.add(434);
        queue.add(397);
        queue.add(692);

        queue.remove();

        expect(queue.head.value).toBe(397);
    });


});