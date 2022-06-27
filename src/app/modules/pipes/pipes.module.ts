import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasCountPipe } from './pipes/has-count.pipe';
import { ExistPipe } from './pipes/exist.pipe';
import { HasEntriesPipe } from './pipes/has-entries.pipe';
import { SplitPipe } from './pipes/split.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  declarations: [HasCountPipe, ExistPipe, HasEntriesPipe, SplitPipe, TruncatePipe],
  imports: [
    CommonModule
  ],
  exports: [HasCountPipe, ExistPipe, HasEntriesPipe, SplitPipe, TruncatePipe]
})
export class PipesModule { }
