import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'icon-visibility-off',
  templateUrl: './visibility-off.svg',
})
export class VisibilityOffComponent implements OnInit {

  constructor() { }

  @Input() public size = 48;

  ngOnInit(): void {
  }

  public computeViewBox() {
    return '0 0 48 48';
  }

}
