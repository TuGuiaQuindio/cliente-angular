import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-page-view',
  templateUrl: './settings-page-view.component.html',
  styleUrls: ['./settings-page-view.component.scss']
})
export class SettingsPageViewComponent implements OnInit {

  constructor() { }
  @Input() public title = "";
  @Input() public subtitle = "";

  ngOnInit(): void {
  }

}
