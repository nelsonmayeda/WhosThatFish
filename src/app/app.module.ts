import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {GameComponent} from './game/game.component';
import {FlipComponent} from './game/flip.component';
import {ConfettiComponent} from './game/confetti.component';

@NgModule({
  declarations: [
    AppComponent
    ,GameComponent
    ,FlipComponent
    ,ConfettiComponent
  ],
  imports: [
    BrowserModule
    ,CommonModule
    , FormsModule
    , AppRoutingModule
    , HttpClientModule
    , BrowserAnimationsModule
    , MatTableModule
    ,MatListModule
    ,MatDividerModule
    ,MatButtonModule
    ,MatIconModule
    ,MatCardModule
    ,MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
