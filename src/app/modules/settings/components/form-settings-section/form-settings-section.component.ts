import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-settings-section',
  templateUrl: './form-settings-section.component.html',
  styleUrls: ['./form-settings-section.component.scss']
})
export class FormSettingsSectionComponent implements OnInit {

  constructor() { }
  @Input() public title = "";

  ngOnInit(): void {
  }

}
