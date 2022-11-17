import {LoopFunction} from "../src/loop-function";

describe('Code coverage test', () => {

    const loopFunction = new LoopFunction();

    it('runLoopTillPositive', () => {
        const result = loopFunction.runLoopTillPositive(1);
        expect(result).toBe('Number of iterations: 0');
    });
    it('runLoopTillPositive', () => {
        const result = loopFunction.runLoopTillPositive(-2);
        expect(result).toBe('Number of iterations: 3');
    });
})
