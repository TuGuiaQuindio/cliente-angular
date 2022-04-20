import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-option-card',
  templateUrl: './option-card.component.html',
  styleUrls: ['./option-card.component.scss']
})
export class OptionCardComponent implements OnInit {

  constructor() { }

  @Input() public title = "";
  @Input() public selected = false;
  @Input() public urlTo = "";

  @HostBinding("class.selected") get selectionState() {
    return this.selected;
  }
  ngOnInit(): void {
  }

}
