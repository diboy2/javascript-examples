import Stack from "../examples/Stack";

describe("Stack", () => {
    let stack;
    beforeEach(() => {
        stack = new Stack();
    });

    it("should return the size", () => {
        stack.push(3);
        stack.push(4);
        expect(stack.size()).toBe(2);
    });

    it("should add a value", () => {
        stack.push(10);
        expect(stack.top()).toEqual(10);
    });

    it("should remove a value", () => {
        stack.push(123);
        stack.push(43234);
        stack.push(3242);
        stack.push(34324);

        stack.pop();
        stack.pop();
        expect(stack.top()).toEqual(43234);
    });

    it("should return true for empty", () => {
        expect(stack.isEmpty()).toBeTruthy();
    });
});