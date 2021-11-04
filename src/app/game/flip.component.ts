import { Component, Input} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-card',
  template: `
  <div class="material-box box-square">
	<div class="box-flipper" [@flipState]="flip">
		<img class="box-side box-front box-img" src='{{frontUrl}}' />
		<img class="box-side box-back box-img"src='{{backUrl}}' />
	</div>
</div>
  `,
  styles: [
    `
      .box-square{
        display: block;
        width: 100%;
        position: relative;
      }
      .box-square::before{
        display: block;
    width: 100%;
    content: '';
    padding-top: 100%;
    
    background: #9c27b0;
    border-radius: 10 px;
    opacity: 0.4;
      }
      .box-flipper {
        position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: center;
    font: 0/0 a;
    box-sizing: content-box;

    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
-webkit-transform         : transform 1s;
-ms-transform         : transform 1s;
    transform         : transform 1s;
      }
      .box-side {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        text-align: center;
        font: 0/0 a;
        box-sizing: content-box;
  
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
  
        -webkit-user-select: none;
           -moz-user-select: none;
            -ms-user-select: none;
                user-select: none;
      }
      .box-front {
        -webkit-transform : rotateY(0deg);
        -ms-transform     : rotateY(0deg);
        transform         : rotateY(0deg);
      }
      .box-back {
        -webkit-transform : rotateY(-180deg);
        -ms-transform     : rotateY(-180deg);
        transform         : rotateY(-180deg);
      }
      .box-img{
        max-width: 100%;
        max-height: 100%;
        vertical-align: middle;
      }
    `
  ],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class FlipComponent {
    @Input() public frontUrl: string;
    @Input() public backUrl: string;
    @Input() public flip: string ='inactive';
  constructor() { }


}