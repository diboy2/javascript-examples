import LinkedList from "../examples/LinkedList";

describe("LinkedList", () => {
    let linkedList;
    beforeEach(() => {
        linkedList = new LinkedList();
    });

    it("should return size", () => {
        expect(linkedList.size()).toBe(0);
    });
});