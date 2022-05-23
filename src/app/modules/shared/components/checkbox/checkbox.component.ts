import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { WarningMessenger } from 'src/app/interfaces/warning-messenger';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit, ControlValueAccessor, WarningMessenger {

  @Input() public warningMsg = "";
  @Input() public label = "";

  public control!: FormControl;

  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }
  writeValue(): void { }
  registerOnChange(): void { }
  registerOnTouched(): void { }

  ngOnInit(): void {
  }

}
