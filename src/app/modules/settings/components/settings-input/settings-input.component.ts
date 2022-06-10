import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';
import { InputValueAccessor } from 'src/app/classes/input-value-accessor';
import { WarningMessenger } from 'src/app/interfaces/warning-messenger';

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
  public warning = "";

  ngOnInit(): void {
    this.setup();
  }

}
