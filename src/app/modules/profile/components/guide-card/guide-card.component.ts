import { Component, Input, OnInit } from '@angular/core';

export type CardItem = { title: string, content: string, icon: string }
@Component({
  selector: 'app-guide-card',
  templateUrl: './guide-card.component.html',
  styleUrls: ['./guide-card.component.scss']
})
export class GuideCardComponent implements OnInit {

  constructor() { }
  @Input() public name = "";
  @Input() public items: CardItem[] = [];

  ngOnInit(): void {
  }

}
