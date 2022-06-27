import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewComponent } from './preview/preview.component';
import { SharedModule } from '../shared/shared.module';
import { LanguageFormModule } from '../language-form/language-form.module';
import { ProfileRoutingModule } from './profile-routing.module';
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
    ProfileRoutingModule,
    LanguageFormModule,
  ],
  exports: [
    PreviewComponent,
  ]
})
export class ProfileModule { }
