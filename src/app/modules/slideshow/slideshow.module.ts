import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { SlideComponent } from './components/slide/slide.component';
import { BubbleSlideIndicatorComponent } from './components/bubble-slide-indicator/bubble-slide-indicator.component';

@NgModule({
  declarations: [ SlideshowComponent, SlideComponent, BubbleSlideIndicatorComponent ],
  imports: [
    CommonModule
  ],
  exports: [
    SlideshowComponent,
    SlideComponent,
    BubbleSlideIndicatorComponent,
  ]
})
export class SlideshowModule { }
