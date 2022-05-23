import { Component, HostBinding, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, FormControlDirective, FormControlName, FormGroupDirective, NgControl, NgModel } from '@angular/forms';
import { InputValueAccessor } from 'src/app/classes/input-value-accessor';
import { WarningMessenger } from 'src/app/interfaces/warning-messenger';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent extends InputValueAccessor implements OnInit, WarningMessenger {

  constructor(@Optional() @Self() ngControl: NgControl) {
    super(ngControl);
  }

  @Input() public label = "Default";
  @Input() public placeholder = "";
  @Input() public type = "text";
  @Input() public warningMsg = "";

  public visible = false;

  ngOnInit(): void {
    this.setup();
  }

  @HostBinding('class.warning') 
  public get showWarning() {
    return this.warningMsg.length != 0;
  }

  public get isPasswordInput(): boolean {
    return this.type === 'password';
  }

  togglePasswordVisibility() {
    this.visible = !this.visible;
  }
}
