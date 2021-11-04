import { Component, ViewChild, Input  } from '@angular/core';
import * as confetti from 'canvas-confetti';

@Component({
  selector: 'app-confetti',
  template: `
  <canvas id='myCanvas'></canvas>
  `
  ,styles: []
})
export class ConfettiComponent {
    @ViewChild('myCanvas') myCanvas
    private _flip: string ='inactive';
    @Input() 
    get flip(): string { return this._flip; }
    set flip(flip: string) {
      if(flip =='active'){
        this.surprise();
      }
      this._flip = flip;
    }
    constructor() {}
    
  surprise(): void {
    const myConfetti = confetti.create(this.myCanvas, {
      resize: true // will fit all screen sizes
    });
 
    myConfetti({
        particleCount: 500 //default 50
        //,angle:90//default 90 straight up
        ,spread: 160 //default 45
        ,startVelocity: 100
        , origin:{x:0.5,y:1}//0,1 left bottom, default is .5,.5 middle middle
      });
  }
}
