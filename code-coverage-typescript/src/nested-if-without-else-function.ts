export class NestedIfWithoutElseFunction {
    // Falsche Branch Coverage
    // Richtige Branch Coverage nur bei else
    public checkLastNumber(array: number[]): string {
        if (array.length != 0) {
            if (array[array.length-1] < 0) {
                return 'NEGATIVE'
            } else {
                return 'ZERO OR POSITIVE';
            }
        }
        return 'EMPTY ARRAY';
    }
}
