export class SwitchCaseFunction {
    public checkStatus(color: string): string {
        let status;
        switch (color) {
            case 'GREEN':
                status = 'OK'
                console.log(status);
                break;
            case 'RED':
                status = 'FAILED'
                console.log(status);
                break;
            default:
                status = 'UNDEFINED'
                console.log(status);
                break;
        }
        return status;
    }
}
