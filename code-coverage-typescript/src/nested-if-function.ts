export class NestedIfFunction {
    public checkLastNumber(array: number[]): string {
        if (array.length != 0) {
            if (array[array.length-1] < 0) {
                return 'NEGATIVE'
            } else {
                return 'ZERO OR POSITIVE';
            }
        } else {
            return 'EMPTY ARRAY';
        }
    }
}
