import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorTablesComponent } from './components/color-tables/color-tables.component';



@NgModule({
  declarations: [
    ColorTablesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ColorTablesComponent
  ]
})
export class DevelopmentModule { }
