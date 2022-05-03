import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'icon-visibility',
  templateUrl: './visibility.svg',
})
export class VisibilityComponent implements OnInit {

  @Input() public size = 48;

  constructor() { }

  public computeViewBox(): string {
    return `0 0 48 48`
  }

  ngOnInit(): void {
  }

}
