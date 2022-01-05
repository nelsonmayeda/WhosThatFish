import { Component, ViewChildren } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import { ViewEncapsulation } from '@angular/core';
import  {IGame}  from './game.model';

@Component({
  selector: 'app-game',
  template: `
<app-confetti [flipped]=flipped></app-confetti>
<mat-progress-spinner *ngIf='loading' mode="indeterminate"></mat-progress-spinner>
<mat-card *ngIf='!loading' class="example-card">
    <mat-card-header>
    <div mat-card-avatar class="example-header-image"><button mat-icon-button color="accent" (click)=answer()><mat-icon>help</mat-icon></button></div>
        <mat-card-title class='mat-display-2'>Who's That Fish?</mat-card-title>
    </mat-card-header>
    <app-card mat-card-image [flipped]='flipped' [frontUrl]='myData?.questionImage || ""' [backUrl]='myData?.answerImage || ""'></app-card>
    <mat-card-content>
        <mat-list color='primary'>
        <mat-list-item *ngFor="let c of myData?.choices" 
        (click)="checkThis(c); showTooltips()"
        color='primary' 
        [ngClass]="{'active' : flipped && c==myData?.answer}"
        [matTooltipDisabled]="tooltipDisable" 
        [matTooltip]="c==myData?.answer ? '':'Wrong'"
        matTooltipPosition="right"
        #tooltip="matTooltip"
        [matTooltipClass]="{ 'tool-tip': true }"
        matTooltipTouchGestures='off'
        >
        <mat-divider></mat-divider>
        {{c}}
        </mat-list-item>
        </mat-list>
    </mat-card-content>
    <mat-card-actions>
    <button mat-raised-button color="accent" (click)=reset()>Next</button>
    </mat-card-actions>
</mat-card>
  `
  ,styles: [`
  .mat-list-base .mat-list-item .mat-divider, .mat-list-base .mat-list-option .mat-divider{
      top:0;
      bottom:auto;
  }
  .mat-list-item.active{
    background-color: #9c27b0;
  }
  .mat-divider {
    border-top-color: #9c27b0;
}
.example-card {
    max-width: 400px;
}
.tool-tip {
    background-color: red;

  }
  `],
  encapsulation: ViewEncapsulation.None
})
export class GameComponent {
    @ViewChildren('tooltip') tooltips;
    myData:IGame 
    loading:boolean=true;
    flipped:boolean=false;
    lastChoice = '';
    tooltipDisable:boolean=true;
    constructor() {}
    ngOnInit():void{
        this.getStuff();
    }
    reset():void{
        this.flipped=false; 
        this.getStuff();
    }
    answer():void{
        //override with special button
            this.flipped= true; 
            this.lastChoice='';
            this.tooltipDisable = true;
    }
    checkThis(choice:string):void{
        //NOTE: this.flip this will trigger child components confetti and card
        if(choice == this.myData.answer){
            this.answer();
        }else{
            this.flipped = false;
            this.lastChoice=choice;
            this.tooltipDisable = false;
        }
    }
    showTooltips():void{
        if(!this.flipped){
            this.tooltipDisable = false;
              setTimeout(() => {
                this.tooltips._results.forEach(item => item.show());
              })
        }else{
            this.tooltips._results.forEach(item => item.hide());
        }
    }
    getStuff():void{
        this.loading=true;
        
        fetch('//fishedex.azurewebsites.net/api/species/random')
        .then(response => response.json())
        .then(data => {
            this.loading=false;
            this.myData={
            id:data.Card.Species.Id
            ,questionImage:data.Card.Species.TileURL
            ,choices:data.Choices
            ,answer:data.Card.Fish.Title
            , answerImage:data.Card.Fish.TileURL
        };
    });
    }
}
