import {Component, Input} from '@angular/core';

@Component({
  selector: 'number-checker',
  template: `
    <div>
      <button (click)="handleClick()">Click me</button>
      <span id="counter">{{count}}</span>
      <br/>
      <span id="result">{{result}}</span>
    </div>
  `,
})
export class NumberCheckerComponent {
  @Input() array: number[] = [];
  @Input() number: number = 0;
  count = 0;
  result = 'No result yet';

  handleClick() {
    this.count++;
    if (this.array.includes(this.number)) {
      this.result = 'Array contains number';
    } else {
      this.result = 'Array doesn\'t contain number';
    }
  }
}
