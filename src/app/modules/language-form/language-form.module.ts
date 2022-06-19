import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarLevelComponent } from './components/star-level/star-level.component';
import { LanguageInputComponent } from './components/language-input/language-input.component';
import { SharedModule } from '../shared/shared.module';
import { LanguageFormServicesModule } from './services/language-form-services/language-form-services.module';

@NgModule({
  declarations: [
    StarLevelComponent,
    LanguageInputComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LanguageFormServicesModule
  ],
  exports: [
    StarLevelComponent,
    LanguageInputComponent
  ]
})
export class LanguageFormModule { }
