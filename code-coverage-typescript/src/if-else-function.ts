export class IfElseFunction {
    public isEmpty(array: number[]): boolean {
        const length = array.length;
        console.log('Checking array: ' + array);
        if (length == 0) return true;
        else {
            console.log('Array length is ' + length);
            return false;
        }
    }
}
