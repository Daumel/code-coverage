export class LoopFunction {
    // Falsche Branch Coverage
    public runLoopTillPositive(num: number): string {
        let counter = 0;
        while (num <= 0) {
            counter++;
            num++;
        }
        return 'Number of iterations: ' + counter;
    }
}
