import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './shared/material.module';

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
    , MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
