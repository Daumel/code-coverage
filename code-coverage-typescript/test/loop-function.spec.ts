import {LoopFunction} from "../src/loop-function";

describe('Code coverage test', () => {

    const loopFunction = new LoopFunction();

    it('don\'t run loop', () => {
        const result = loopFunction.runLoopTillPositive(1);
        expect(result).toBe('Number of iterations: 0');
    });
    it('run loop', () => {
        const result = loopFunction.runLoopTillPositive(-2);
        expect(result).toBe('Number of iterations: 3');
    });
})
