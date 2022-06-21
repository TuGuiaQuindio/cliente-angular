import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsInputComponent } from '../settings/components/settings-input/settings-input.component';
import { FormSettingsSectionComponent } from '../settings/components/form-settings-section/form-settings-section.component';
import { MapModule } from '../map/map.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SettingsInputComponent,
    FormSettingsSectionComponent
  ],
  imports: [
    CommonModule,
    MapModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    SettingsInputComponent,
    FormSettingsSectionComponent,
  ]
})
export class SettingsFormModule { }
