import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarLevelComponent } from './components/star-level/star-level.component';
import { LanguageInputComponent } from './components/language-input/language-input.component';
import { SharedModule } from '../shared/shared.module';
import { LanguageFormServicesModule } from './services/language-form-services/language-form-services.module';
import { LanguageDisplayComponent } from './components/language-display/language-display.component';
import { LanguageListInputComponent } from './components/language-list-input/language-list-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StarLevelComponent,
    LanguageInputComponent,
    LanguageDisplayComponent,
    LanguageListInputComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LanguageFormServicesModule,
    ReactiveFormsModule
  ],
  exports: [
    StarLevelComponent,
    LanguageInputComponent,
    LanguageDisplayComponent,
    LanguageListInputComponent
  ]
})
export class LanguageFormModule { }
