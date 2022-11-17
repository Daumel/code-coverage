import {SwitchCaseFunction} from "../src/switch-case-function";

describe('Code coverage test', () => {

    const switchCaseFunction = new SwitchCaseFunction();

    it('checkDirection checks up', () => {
        const result = switchCaseFunction.checkStatus('GREEN')
        expect(result).toBe('OK');
    });
    it('checkDirection checks down', () => {
        const result = switchCaseFunction.checkStatus('RED')
        expect(result).toBe('FAILED');
    });
    it('checkDirection checks left', () => {
        const result = switchCaseFunction.checkStatus('YELLOW')
        expect(result).toBe('UNDEFINED');
    });
})
