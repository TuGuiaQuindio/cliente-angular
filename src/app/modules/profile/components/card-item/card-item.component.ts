import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  constructor() { }
  @Input() public icon = "";
  @Input() public title = "";
  @Input() public content = "";

  ngOnInit(): void {
  }

}
