import { Component, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { handleFormErrors } from 'src/app/helpers/form-helper';
import { WarningMessenger } from 'src/app/interfaces/warning-messenger';
import { SettingsInputComponent } from '../settings-input/settings-input.component';

export type SettingSectionDefinition = { title: string, inputs: SettingInputDefinition[], formGroup: FormGroup }
export type SettingInputDefinition = { name: string, description: string, formControlName: string, inputType: string, example?: SettingInputExample }
export type SettingInputExample = { title: string, examples: string[] }
@Component({
  selector: 'app-panel-builder',
  templateUrl: './panel-builder.component.html',
  styleUrls: ['./panel-builder.component.scss']
})
export class PanelBuilderComponent {

  constructor(private fb: FormBuilder) { }
  
  @Input() public sections!: SettingSectionDefinition[];
  @Input() public dataForm!: FormGroup;
  @Input() public title = "";
  @Input() public subtitle = "";
  @Output() public confirmClick = new EventEmitter<void>();
  @ViewChildren(SettingsInputComponent) public set sectionContainer(el: QueryList<SettingsInputComponent>) {
    this.setInputRefs(el.toArray());
  }

  public inputRefs: { [key: string]: WarningMessenger } = {}

  public setInputRefs(values: SettingsInputComponent[]) {
    values.forEach(it => {
      this.inputRefs[it.formControlName] = it;
    })
  }

  public checkErrors(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(el => {
      if (!(el instanceof FormGroup)) return;
      handleFormErrors(el as FormGroup, this.inputRefs);
    })
  }
  
  public onSubmit() {
    this.checkErrors(this.dataForm);
    this.confirmClick.next();
  }
}
