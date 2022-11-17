export class IfElseIfElseFunction {
    public checkNumber(num: number): string {
        console.log('Checking number: ' + num);
        if (num < 0) return 'negative';
        else if (num == 0) return 'zero';
        else return 'positive';
    }
}
