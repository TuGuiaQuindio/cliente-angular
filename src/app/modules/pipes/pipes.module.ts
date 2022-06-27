import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasCountPipe } from './pipes/has-count.pipe';
import { ExistPipe } from './pipes/exist.pipe';
import { HasEntriesPipe } from './pipes/has-entries.pipe';

@NgModule({
  declarations: [HasCountPipe, ExistPipe, HasEntriesPipe],
  imports: [
    CommonModule
  ],
  exports: [HasCountPipe, ExistPipe, HasEntriesPipe]
})
export class PipesModule { }
