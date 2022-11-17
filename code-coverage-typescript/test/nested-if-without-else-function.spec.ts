import {NestedIfWithoutElseFunction} from "../src/nested-if-without-else-function";

describe('Code coverage test', () => {

    const nestedIfWithoutElseFunction = new NestedIfWithoutElseFunction();

    it('checkLastNumber checks array with negative last number', () => {
        const result = nestedIfWithoutElseFunction.checkLastNumber([1, 2, 3, 4, -5]);
        expect(result).toBe('NEGATIVE');
    });
    it('checkLastNumber checks array with positive last number', () => {
        const result = nestedIfWithoutElseFunction.checkLastNumber([1, 2, 3, 4, 5]);
        expect(result).toBe('ZERO OR POSITIVE');
    });
    it('checkLastNumber checks empty array', () => {
        const result = nestedIfWithoutElseFunction.checkLastNumber([]);
        expect(result).toBe('EMPTY ARRAY');
    });
})
