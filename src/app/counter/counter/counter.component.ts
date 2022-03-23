import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html',
})
export class CounterComponent {
  public title: string = 'Contador App';
  public initValue: number = 10;
  public number: number = this.initValue;
  public base: number = 5;

  updateCounter(value: number = 1) {
    return (this.number += value);
  }
}
