import { NgModule } from '@angular/core';
import {MatTableModule } from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
    exports: [
        MatTableModule
        ,MatListModule
        ,MatDividerModule
        ,MatButtonModule
        ,MatIconModule
        ,MatCardModule
        ,MatProgressSpinnerModule
        ,MatTooltipModule
    ],
  })
  export class MaterialModule {}