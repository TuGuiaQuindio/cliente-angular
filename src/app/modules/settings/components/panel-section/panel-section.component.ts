import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-section',
  templateUrl: './panel-section.component.html',
  styleUrls: ['./panel-section.component.scss']
})
export class PanelSectionComponent implements OnInit {

  constructor() { }
  @Input() public title = "";

  ngOnInit(): void {
  }

}
