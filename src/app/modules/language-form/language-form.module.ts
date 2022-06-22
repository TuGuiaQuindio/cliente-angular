import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarLevelComponent } from './components/star-level/star-level.component';
import { LanguageInputComponent } from './components/language-input/language-input.component';
import { SharedModule } from '../shared/shared.module';
import { LanguageFormServicesModule } from './services/language-form-services/language-form-services.module';
import { LanguageDisplayComponent } from './components/language-display/language-display.component';
import { LanguageDisplayShortComponent } from './components/language-display-short/language-display-short.component';

@NgModule({
  declarations: [
    StarLevelComponent,
    LanguageInputComponent,
    LanguageDisplayComponent,
    LanguageDisplayShortComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LanguageFormServicesModule
  ],
  exports: [
    StarLevelComponent,
    LanguageInputComponent,
    LanguageDisplayComponent,
    LanguageDisplayShortComponent
  ]
})
export class LanguageFormModule { }
