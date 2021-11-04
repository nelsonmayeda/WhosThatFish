import { Component } from '@angular/core';
import  {IGame}  from './game.model';

@Component({
  selector: 'game',
  template: `
<app-confetti [flip]='flip'></app-confetti>
<mat-progress-spinner *ngIf='loading' mode="indeterminate"></mat-progress-spinner>
<mat-card *ngIf='!loading' class="example-card">
    <mat-card-header>
    <div mat-card-avatar class="example-header-image"><button mat-icon-button color="accent" (click)=answer()><mat-icon>help</mat-icon></button></div>
        <mat-card-title class='mat-display-2'>Who's That Fish?</mat-card-title>
    </mat-card-header>
    <app-card mat-card-image [flip]='flip' [frontUrl]='myData?.questionImage || ""' [backUrl]='myData?.answerImage || ""'></app-card>
    <mat-card-content>
        <mat-list color='primary'>
        <mat-list-item color='primary' *ngFor="let c of myData?.choices" (click)=checkThis(c) [ngClass]="{'active' : flip == 'active' && c==myData?.answer}">
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
  `]
})
export class GameComponent {
    myData:IGame 
    loading:Boolean=true;
    flip = 'inactive';
    constructor() {}
    ngOnInit():void{
        this.getStuff();
    }
    reset():void{
        this.flip='inactive'; 
        this.getStuff();
    }
    answer():void{
        this.flip='active'; 
    }
    checkThis(choice:string):void{
        //NOTE: this.flip this will trigger child components confetti and card
        if(choice == this.myData.answer){
            this.flip='active'; 
        }else{
            this.flip = 'inactive';
        }
    }
    getStuff():void{
        fetch('http://fishedex.azurewebsites.net/api/species/random')
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
