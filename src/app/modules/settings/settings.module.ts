import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { SharedModule } from '../shared/shared.module';
import { PanelSettingsComponent } from './components/panel-settings/panel-settings.component';
import { PanelSectionComponent } from './components/panel-section/panel-section.component';
import { PanelSettingsButtonComponent } from './components/panel-settings-button/panel-settings-button.component';
import { SettingsPageViewComponent } from './components/settings-page-view/settings-page-view.component';
import { SecurityComponent } from './routes/security/security.component';
import { FormSettingsSectionComponent } from './components/form-settings-section/form-settings-section.component';
import { SettingsInputComponent } from './components/settings-input/settings-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PanelBuilderComponent } from './components/panel-builder/panel-builder.component';
import { PersonalInformationComponent } from './routes/personal-information/personal-information.component';
import { SettingsServicesModule } from './services/settings-services.module';
import { MapModule } from '../map/map.module';
import { CertificatesComponent } from './routes/certificates/certificates.component';
import { UploadModule } from '../upload/upload.module';
import { LanguageFormModule } from '../language-form/language-form.module';
import { LanguagesComponent } from './routes/languages/languages.component';
import { SettingsMainPageComponent } from './routes/settings-main-page/settings-main-page.component';

@NgModule({
  declarations: [
    SettingsComponent,
    PanelSettingsComponent,
    PanelSectionComponent,
    PanelSettingsButtonComponent,
    SettingsPageViewComponent,
    SecurityComponent,
    FormSettingsSectionComponent,
    SettingsInputComponent,
    PanelBuilderComponent,
    PersonalInformationComponent,
    CertificatesComponent,
    LanguagesComponent,
    SettingsMainPageComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    SettingsServicesModule,
    MapModule,
    UploadModule,
    LanguageFormModule,
  ]
})
export class SettingsModule { }
