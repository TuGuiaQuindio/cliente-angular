import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewComponent } from './preview/preview.component';
import { SharedModule } from '../shared/shared.module';
import { LanguageFormModule } from '../language-form/language-form.module';
import { GuideCardComponent } from './components/guide-card/guide-card.component';
import { CardItemComponent } from './components/card-item/card-item.component';

@NgModule({
  declarations: [
    PreviewComponent,
    GuideCardComponent,
    CardItemComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    LanguageFormModule,
  ],
  exports: [
    PreviewComponent,
  ]
})
export class ProfileModule { }
