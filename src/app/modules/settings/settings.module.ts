import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { SharedModule } from '../shared/shared.module';
import { PanelSettingsComponent } from './components/panel-settings/panel-settings.component';
import { PanelSectionComponent } from './components/panel-section/panel-section.component';
import { PanelSettingsButtonComponent } from './components/panel-settings-button/panel-settings-button.component';


@NgModule({
  declarations: [
    SettingsComponent,
    PanelSettingsComponent,
    PanelSectionComponent,
    PanelSettingsButtonComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule
  ]
})
export class SettingsModule { }
