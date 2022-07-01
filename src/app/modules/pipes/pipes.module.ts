import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasCountPipe } from './pipes/has-count.pipe';
import { ExistPipe } from './pipes/exist.pipe';
import { HasEntriesPipe } from './pipes/has-entries.pipe';
import { SplitPipe } from './pipes/split.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { StrLengthPipe } from './pipes/str-length.pipe';
import { NotZeroPipe } from './pipes/not-zero.pipe';
import { AvailabilityMappingPipe } from './pipes/availability-mapping.pipe';

@NgModule({
  declarations: [HasCountPipe, ExistPipe, HasEntriesPipe, SplitPipe, TruncatePipe, StrLengthPipe, NotZeroPipe, AvailabilityMappingPipe],
  imports: [
    CommonModule
  ],
  exports: [HasCountPipe, ExistPipe, HasEntriesPipe, SplitPipe, TruncatePipe, StrLengthPipe, NotZeroPipe, AvailabilityMappingPipe]
})
export class PipesModule { }
