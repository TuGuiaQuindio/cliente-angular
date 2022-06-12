import { Component, ElementRef, Input, OnInit, Optional, Self, ViewChild } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';
import { InputValueAccessor } from 'src/app/classes/input-value-accessor';
import { WarningMessenger } from 'src/app/interfaces/warning-messenger';
import { InputComponent } from 'src/app/modules/shared/input/input.component';
import { SettingInputExample } from '../panel-builder/panel-builder.component';

@Component({
  selector: 'app-settings-input',
  templateUrl: './settings-input.component.html',
  styleUrls: ['./settings-input.component.scss']
})
export class SettingsInputComponent extends InputValueAccessor implements OnInit, WarningMessenger {

  constructor(@Optional() @Self() ngControl: NgControl) {
    super(ngControl);
  }
  set warningMsg(value: string) {
    this.warning = value;
  }
  @Input() public name = "";
  @Input() public description = "";
  @Input() public inputType = "";
  @Input() public formControlName = "";
  @Input() public examples?: SettingInputExample;
  @ViewChild('input', { read: InputComponent }) public set hostInput(value: InputComponent) {
    this.input = value;
  }
  public input!: InputComponent;
  public warning = "";

  ngOnInit(): void {
    this.setup();
  }

  setFocus() {
    this.input.setFocus();
  }

  isMap() {
    return this.inputType == "map";
  }

  hasExamples() {
    return !!this.examples;
  }
}
