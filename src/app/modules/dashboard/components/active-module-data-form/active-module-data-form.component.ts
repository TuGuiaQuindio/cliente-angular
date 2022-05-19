import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SlideshowComponent } from 'src/app/modules/slideshow/components/slideshow/slideshow.component';

type SlideshowState = { count: number, currentSlide: number }
@Component({
  selector: 'app-active-module-data-form',
  templateUrl: './active-module-data-form.component.html',
  styleUrls: ['./active-module-data-form.component.scss']
})
export class ActiveModuleDataFormComponent implements OnInit {

  constructor() { }

  private slideshow!: SlideshowComponent;
  private slideshowStateSubj = new BehaviorSubject<SlideshowState>({count: 1, currentSlide: 1});

  @Input() rolType = 1;
  @ViewChild('slideshow') public set hostSlideshow(value: SlideshowComponent) {
    this.slideshow = value;
    setTimeout(() => this.updateSlideshowState());
  }

  public onNextClick(): void {
    this.slideshow.next();
    this.updateSlideshowState();
  }

  private updateSlideshowState(): void {
    const count = this.slideshow.count;
    const currentSlide = this.slideshow.getCurrentIndex();
    this.slideshowStateSubj.next({count, currentSlide})
  }

  public onPreviousClick(): void {
    this.slideshow.previous();
    this.updateSlideshowState();
  }

  public get slideshowState$(): Observable<SlideshowState> {
    return this.slideshowStateSubj.asObservable();
  }

  ngOnInit(): void {
  }

}
