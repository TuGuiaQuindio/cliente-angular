import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';
import { InputValueAccessor } from 'src/app/classes/input-value-accessor';

@Component({
  selector: 'app-settings-input',
  templateUrl: './settings-input.component.html',
  styleUrls: ['./settings-input.component.scss']
})
export class SettingsInputComponent extends InputValueAccessor implements OnInit {

  constructor(@Optional() @Self() ngControl: NgControl) {
    super(ngControl);
  }
  @Input() public name = "";
  @Input() public description = "";
  @Input() public inputType = "";
  @Input() public formControlName = "";

  ngOnInit(): void {
    this.setup();
  }

}
