import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NumberCheckerComponent} from "./number-checker.component";

describe('NumberChecker', () => {
  let component: NumberCheckerComponent;
  let fixture: ComponentFixture<NumberCheckerComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NumberCheckerComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberCheckerComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('Button is not clicked', () => {
    expect(element.querySelector('#counter')?.textContent).toContain('0');
    expect(element.querySelector('#result')?.textContent).toContain('No result yet');
  });

  it('Array contains number', () => {
    component.array = [1, 2, 3, 4, 5];
    component.number = 5;
    element.querySelector('button')?.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(element.querySelector('#counter')?.textContent).toContain('1');
    expect(element.querySelector('#result')?.textContent).toContain('Array contains number');
  });

  it('Array doesn\'t contain number', () => {
    component.array = [1, 2, 3, 4, 5];
    component.number = 6;
    element.querySelector('button')?.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(element.querySelector('#counter')?.textContent).toContain('1');
    expect(element.querySelector('#result')?.textContent).toContain('Array doesn\'t contain number');
  });
});
