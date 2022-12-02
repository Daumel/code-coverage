import {TernaryOperatorFunction} from "../src/ternary-operator-function";

describe('Code coverage test', () => {

    const ternaryOperatorFunction = new TernaryOperatorFunction();

    it('checkNumber identifies positive number', () => {
        const result = ternaryOperatorFunction.checkNumber(5)
        expect(result).toBe('positive');
    });
    it('checkNumber identifies zero or a negative number', () => {
        const result = ternaryOperatorFunction.checkNumber(-5)
        expect(result).toBe('zero or negative');
    });
})
