import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasCountPipe } from './pipes/has-count.pipe';

@NgModule({
  declarations: [HasCountPipe],
  imports: [
    CommonModule
  ],
  exports: [HasCountPipe]
})
export class PipesModule { }
