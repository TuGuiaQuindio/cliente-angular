import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { SlideComponent } from './components/slide/slide.component';

@NgModule({
  declarations: [ SlideshowComponent, SlideComponent ],
  imports: [
    CommonModule
  ],
  exports: [
    SlideshowComponent,
    SlideComponent
  ]
})
export class SlideshowModule { }
