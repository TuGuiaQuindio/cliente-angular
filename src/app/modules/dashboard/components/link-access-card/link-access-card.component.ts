import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-access-card',
  templateUrl: './link-access-card.component.html',
  styleUrls: ['./link-access-card.component.scss']
})
export class LinkAccessCardComponent implements OnInit {

  constructor() { }

  @Input() public title = "";
  @Input() public description = "";
  @Input() public buttonLabel = "";
  @Input() public icon = "";
  @Input() public link = "";

  ngOnInit(): void {
  }

}
