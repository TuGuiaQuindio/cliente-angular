import { Component, HostBinding, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, FormControlDirective, FormControlName, FormGroupDirective, NgControl, NgModel } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, ControlValueAccessor {

  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }
  writeValue(): void { }
  registerOnChange(): void { }
  registerOnTouched(): void { }

  @Input() public label = "Default";
  @Input() public placeholder = "";
  @Input() public type = "text";
  @Input() public warningMsg = "";

  public visible = false;
  public control!: FormControl;

  ngOnInit(): void {
    if (this.ngControl instanceof FormControlName) {
      const formGroupDirective = this.ngControl.formDirective as FormGroupDirective;
      if (formGroupDirective) {
        const name = this.ngControl.name!;
        this.control = formGroupDirective.form.controls[name] as FormControl;
      }
    } else if (this.ngControl instanceof FormControlDirective) {
      this.control = this.ngControl.control;
    } else if (this.ngControl instanceof NgModel) {
      this.control = this.ngControl.control;
      this.control.valueChanges.subscribe(x => this.ngControl.viewToModelUpdate(this.control.value));
    } else if (!this.ngControl) {
      this.control = new FormControl();
    }  }

  @HostBinding('class.warning') 
  public get showWarning() {
    return this.warningMsg.length != 0;
  }

  togglePasswordVisibility() {
    this.visible = !this.visible;
  }

}
