import { AfterViewInit, Component, ContentChildren, ElementRef, QueryList, ViewChild } from '@angular/core';
import { SlideComponent } from '../slide/slide.component';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent {

  constructor(public element: ElementRef) {
  }

  viewportWidth = 0;
  viewportHeight = 0;
  private viewIdx = 0;
  private set currentViewIdx(value: number) {
    if (value < 0) {
      this.viewIdx = 0;
    } else if (value >= this.count) {
      this.viewIdx = this.count - 1;
    } else {
      this.viewIdx = value;
    }
  };

  private get currentViewIdx() {
    return this.viewIdx;
  }

  public getCurrentIndex() {
    return this.viewIdx;
  }

  @ContentChildren(SlideComponent) public set content(values: QueryList<SlideComponent>) {
    const htmlElement = this.element.nativeElement as HTMLElement;
    this.viewportWidth = htmlElement.clientWidth;
    this.viewportHeight = htmlElement.clientHeight;
    values.forEach(el => {
      el.setWidth(this.viewportWidth);
      el.setHeight(this.viewportHeight);
    });
    this.count = values.length;
  }

  @ViewChild('scrollview') private set hostScrollView(value: ElementRef) {
    this.scrollview = value.nativeElement;
  }

  public count = 0;
  private scrollview: HTMLElement;

  public getPosition(idx: number) {
    return this.viewportWidth * idx * -1;
  }

  private moveTo(idx: number) {
    const position = this.getPosition(idx);
    this.scrollview.style.transform = `translate(${position}px, 0)`
  }

  private setMovingState() {
    this.scrollview.classList.add('moving');
    this.scrollview.addEventListener('animationend', () => {
      this.scrollview.classList.remove('moving');
    }, { once: true })
  }

  public next() {
    const prevIdx = this.viewIdx;
    this.currentViewIdx++;
    this.moveTo(this.viewIdx);
    if(prevIdx != this.viewIdx) this.setMovingState();
  }

  public view(idx: number) {
    const prevIdx = this.viewIdx;
    this.currentViewIdx = idx;
    this.moveTo(this.viewIdx);
    if(prevIdx != this.viewIdx) this.setMovingState();
  }

  public previous() {
    const prevIdx = this.viewIdx;
    this.currentViewIdx--;
    this.moveTo(this.viewIdx);
    if(prevIdx != this.viewIdx) this.setMovingState();
  }

}
