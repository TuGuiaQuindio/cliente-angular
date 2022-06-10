import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-settings-page-view',
  templateUrl: './settings-page-view.component.html',
  styleUrls: ['./settings-page-view.component.scss']
})
export class SettingsPageViewComponent implements OnInit {

  constructor() { }
  @Input() public title = "";
  @Input() public subtitle = "";

  @Output() public confirmClick = new EventEmitter<void>();

  ngOnInit(): void {

  }

  public onConfirmClick() {
    this.confirmClick.next();
  }

}
