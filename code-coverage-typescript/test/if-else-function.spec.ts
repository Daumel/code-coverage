import {IfElseFunction} from "../src/if-else-function";

describe('Code coverage test', () => {

    const ifElseFunction = new IfElseFunction();

    it('isEmpty identifies empty array', () => {
        const result = ifElseFunction.isEmpty([]);
        expect(result).toBeTruthy();
    });
    it('isEmpty identifies non-empty array', () => {
        const result = ifElseFunction.isEmpty([1, 2, 3, 4, 5]);
        expect(result).toBeFalsy();
    });
})
