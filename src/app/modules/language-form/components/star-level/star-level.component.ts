import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-level',
  templateUrl: './star-level.component.html',
  styleUrls: ['./star-level.component.scss']
})
export class StarLevelComponent implements OnInit {

  constructor() { }
  @Input('level') public set _inputLevel(value: number) {
    this.level = value < 0 ? 0
      : value > this.maxLevel ? this.maxLevel
        : value;

  };
  @Input() public starCount = 5;
  @Input() public maxLevel = 5;
  public level = 0;

  ngOnInit(): void {
  }

  public stars = [
    'bx-star',
    'bxs-star-half',
    'bxs-star',
  ]

  public get starsArray() {
    const output: number[] = [];
    for (let i = 0; i < this.starCount; i++) {
      output.push(this.getStarIndex(i));
    }
    return output;
  }

  public getLevelByPosition(e: MouseEvent, options: { offset: number } = { offset: 0.5 }): number {
    const target = e.target as HTMLElement;
    let rect = target.getBoundingClientRect();
    let x = e.clientX - rect.left; //x position within the element.
    console.warn(x / rect.width);
    const { offset } = options;
    return (x / rect.width) * this.starCount + offset;
  }

  public getStarIndex(currentIdx: number) {
    const fillValue = (this.level / this.maxLevel) * this.starCount;
    const diff = fillValue - currentIdx;
    const value = diff < 0 ? 0 : diff > 1 ? 1 : diff;
    const realValue = Math.floor(value / 0.5) * 0.5;
    return realValue * 2;
  }
}
