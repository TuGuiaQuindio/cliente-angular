import { AfterViewInit, Component, ContentChildren, ElementRef, Input, QueryList, ViewChild } from '@angular/core';
import { SlideComponent } from '../slide/slide.component';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent {

  constructor(public element: ElementRef) { }

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

  @Input() public provideSlidecount = false;

  @Input('count') public set countProperty(value: number) {
    console.log("Count input", value);
    this.count = value;
    this.updateSize();
  }

  @ContentChildren(SlideComponent) public set content(values: QueryList<SlideComponent>) {
    if (!this.provideSlidecount) this.count = values.length;
    setTimeout(() => { console.log(this); }, 2000);
  }

  @ViewChild('scrollview') private set hostScrollView(value: ElementRef) {
    if (!value || !value.nativeElement) return;
    this.scrollview = value.nativeElement;
    this.updateSize();
  }

  public count = 0;
  private scrollview?: HTMLElement;

  public updateSize() {
    if (!this.scrollview) return;
    const scrollSize = this.count * 100;
    this.scrollview.style.width = `${scrollSize}%`;
  }

  public getPosition(idx: number) {
    return (100 / this.count) * idx * -1;
  }

  private moveTo(idx: number) {
    const position = this.getPosition(idx);
    if (!this.scrollview) return;
    this.scrollview.style.transform = `translateX(${position}%)`
  }

  private setMovingState() {
    if (!this.scrollview) return;
    this.scrollview.classList.add('moving');
    this.scrollview.addEventListener('animationend', () => {
      if (!this.scrollview) return;
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
