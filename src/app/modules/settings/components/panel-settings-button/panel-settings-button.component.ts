import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-settings-button',
  templateUrl: './panel-settings-button.component.html',
  styleUrls: ['./panel-settings-button.component.scss']
})
export class PanelSettingsButtonComponent implements OnInit {

  constructor() { }
  @HostBinding('attr.tabindex') tabindex = -1;
  @Input() public icon = "";

  ngOnInit(): void {
  }

}
