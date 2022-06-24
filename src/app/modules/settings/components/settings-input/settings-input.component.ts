import { Component, Input, OnInit, Optional, QueryList, Self, ViewChild, ViewChildren } from '@angular/core';
import { NgControl } from '@angular/forms';
import { InputValueAccessor } from 'src/app/classes/input-value-accessor';
import { SelectOption } from 'src/app/modules/shared/components/select/select.component';
import { InputComponent } from 'src/app/modules/shared/input/input.component';
import { SettingInputExample } from '../panel-builder/panel-builder.component';

@Component({
  selector: 'app-settings-input',
  templateUrl: './settings-input.component.html',
  styleUrls: ['./settings-input.component.scss'],
  providers: [{ provide: InputValueAccessor, useExisting: SettingsInputComponent }]
})
export class SettingsInputComponent extends InputValueAccessor implements OnInit {

  constructor(@Optional() @Self() ngControl: NgControl) {
    super(ngControl);
  }
  @Input() public name = "";
  @Input() public description = "";
  @Input() public inputType = "";
  @Input() public formControlName = "";
  @Input() public examples?: SettingInputExample;
  @Input() public options: SelectOption[] = [];
  @ViewChild('input', { read: InputComponent }) public set hostInput(value: InputComponent) {
    this.input = value;
  }
  @ViewChild(InputValueAccessor) public set container(value: InputValueAccessor) {
    console.warn({ name: this.formControlName, value });
    value.warningMsg = `Valor incorrecto para lo propiedad "${this.formControlName}"`
  }
  public input!: InputComponent;
  public warning = "";
  public selectedOptionIndex = 0;

  onOptionSelected(selected: SelectOption) {
    this.selectedOptionIndex = this.options.findIndex(el => el === selected);
    console.warn(selected.value, this.selectedOptionIndex);
  }

  ngOnInit(): void {
    this.setup();
  }

  setFocus() {
    if (!this.input) return;
    this.input.setFocus();
  }

  hasExamples() {
    return !!this.examples;
  }
}
