import { Component, HostBinding, Input } from "@angular/core";
import { ControlValueAccessor, FormControl, FormControlDirective, FormControlName, FormGroupDirective, NgControl, NgModel } from "@angular/forms";
import { WarningMessengerImpl } from "./warning-messenger-impl";

@Component({
  template: '',
  providers: [{ provide: WarningMessengerImpl, useExisting: InputValueAccessor }]
})
export class InputValueAccessor extends WarningMessengerImpl implements ControlValueAccessor {
  writeValue(): void { }
  registerOnChange(): void { }
  registerOnTouched(): void { }

  public control!: FormControl;

  constructor(public ngControl: NgControl) {
    super();
    if (!this.ngControl) return;
    this.ngControl.valueAccessor = this;
  }
  @Input() public warningMsg = '';

  @HostBinding('class.warning')
  public get hasWarningMessage(): boolean {
    return this.warningMsg.length > 0;
  }

  setup(): void {
    if (!this.ngControl) return;
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
      this.control.valueChanges.subscribe(_ => this.ngControl?.viewToModelUpdate(this.control.value));
    } else if (!this.ngControl) {
      this.control = new FormControl();
    }
  }
}
