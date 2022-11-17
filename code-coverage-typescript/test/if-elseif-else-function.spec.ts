import {IfElseIfElseFunction} from "../src/if-elseif-else-function";

describe('Code coverage test', () => {

    const ifElseIfElseFunction = new IfElseIfElseFunction();

    it('checkNumber identifies negative number', () => {
        const result = ifElseIfElseFunction.checkNumber(-5);
        expect(result).toBe('negative');
    });
    it('checkNumber identifies zero', () => {
        const result = ifElseIfElseFunction.checkNumber(0);
        expect(result).toBe('zero');
    });
    it('checkNumber identifies positive number', () => {
        const result = ifElseIfElseFunction.checkNumber(5);
        expect(result).toBe('positive');
    });
})
