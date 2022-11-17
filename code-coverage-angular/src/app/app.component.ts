import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<number-checker [number]="6" [array]="[1, 2, 3, 4, 5]"></number-checker>`,
})
export class AppComponent {
  title = 'code-coverage-angular';
}
