import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-view',
  templateUrl: './page-view.component.html',
  styleUrls: ['./page-view.component.scss']
})
export class PageViewComponent implements OnInit {

  constructor() { }
  @Input() public title = "";
  @Input() public subtitle = "";

  ngOnInit(): void {
  }

}
