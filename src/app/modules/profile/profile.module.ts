import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewComponent } from './preview/preview.component';
import { SharedModule } from '../shared/shared.module';
import { LanguageFormModule } from '../language-form/language-form.module';
import { ProfileGuideComponent } from './components/profile-guide/profile-guide.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { GuideCardComponent } from './components/guide-card/guide-card.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { ExtraInfoCardComponent } from './components/extra-info-card/extra-info-card.component';
import { PipesModule } from '../pipes/pipes.module';
import { GuideListComponent } from './components/guide-list/guide-list.component';

@NgModule({
  declarations: [
    PreviewComponent,
    ProfileGuideComponent,
    GuideCardComponent,
    CardItemComponent,
    ExtraInfoCardComponent,
    GuideListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule,
    LanguageFormModule,
    PipesModule
  ],
  exports: [
    PreviewComponent,
    ProfileGuideComponent,
  ]
})
export class ProfileModule { }
