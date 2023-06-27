import { Component } from '@angular/core';//importamos un decorador que me permitira convertir mi clase en componente

@Component({//Implementamos este decorador y le añadimos los paramatros 
  selector: 'app-counter',//este nombre es como se le pondrá en el html a usar
  template: `
    <h1> Counter: {{counter}} </h1>

  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>
  `
})
export class CounterComponent {

  public counter: number = 0;

  increaseBy(num: number):void{
    this.counter+=num;
  }
  resetCounter(): void{
    this.counter = 0;
  }
}