import {NestedIfFunction} from "../src/nested-if-function";

describe('Code coverage test', () => {

    const nestedIfFunction = new NestedIfFunction();

    it('checkLastNumber checks array with negative last number', () => {
        const result = nestedIfFunction.checkLastNumber([1, 2, 3, 4, -5]);
        expect(result).toBe('NEGATIVE');
    });
    it('checkLastNumber checks array with positive last number', () => {
        const result = nestedIfFunction.checkLastNumber([1, 2, 3, 4, 5]);
        expect(result).toBe('ZERO OR POSITIVE');
    });
    it('checkLastNumber checks empty array', () => {
        const result = nestedIfFunction.checkLastNumber([]);
        expect(result).toBe('EMPTY ARRAY');
    });
})
