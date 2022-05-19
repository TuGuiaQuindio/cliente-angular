import { Component, Input, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-bubble-slide-indicator',
  templateUrl: './bubble-slide-indicator.component.html',
  styleUrls: ['./bubble-slide-indicator.component.scss']
})
export class BubbleSlideIndicatorComponent implements OnInit {

  constructor() { }

  public numberCount = new Array(1);

  @Input() public count = 1;
  @Input() public currentSlideIndex = 0;
  @Input('count') public set input_count(value: number) {
     this.numberCount = new Array(value);
  }

  public isSelected(index: number): boolean {
    return index == this.currentSlideIndex;
  }
  ngOnInit(): void {
  }

}
