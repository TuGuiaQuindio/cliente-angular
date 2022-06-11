import { Component, ElementRef, HostBinding, Input, OnInit, Optional, Self, ViewChild } from '@angular/core';
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
  @Input() public tabindex = 0;
  @Input() public hideLabel = false;
  @ViewChild('input') public set hostInput(value: ElementRef) {
    this.inputEl = value.nativeElement as HTMLInputElement;
  }

  public visible = false;
  private inputEl!: HTMLInputElement;

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

  public setFocus() {
    this.inputEl.focus();
  }

  togglePasswordVisibility() {
    this.visible = !this.visible;
  }
}
