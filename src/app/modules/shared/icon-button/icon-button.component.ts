import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnInit {

  constructor() { }
  @Input() public icon = "";
  @Input() public label = "";

  ngOnInit(): void {
  }

}
