import LinkedList from "../examples/LinkedList";

describe("LinkedList", () => {
    let linkedList;
    beforeEach(() => {
        linkedList = new LinkedList();
    });

    it("should return size", () => {
        expect(linkedList.size()).toBe(0);
    });

    it("should expect empty", () => {
        expect(linkedList.isEmpty()).toBeTruthy();
    });

    it("should not be empty", () => {
        linkedList.addHead(8);
        expect(linkedList.isEmpty()).toBeFalsy();
    });

    it("should delete node", () =>{
        linkedList.addHead(3);
        linkedList.addHead(5);

        expect(linkedList.isPresent(5)).toBeTruthy();
        linkedList.deleteNode(5);
        expect(linkedList.isPresent(5)).toBeFalsy();
    });

    it("should remove head", () => {
        linkedList.addHead(8);
        linkedList.addHead(10);

        linkedList.removeHead();

        expect(linkedList.isPresent(8)).toBeTruthy();
        expect(linkedList.isPresent(10)).toBeFalsy();
    });

    
});