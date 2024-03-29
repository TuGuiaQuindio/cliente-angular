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
import { ProfileServicesModule } from './profile-services.module';
import { FilterModule } from '../filter/filter.module';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { EnterpriseCardComponent } from './components/enterprise-card/enterprise-card.component';
import { MapModule } from '../map/map.module';

@NgModule({
  declarations: [
    PreviewComponent,
    ProfileGuideComponent,
    GuideCardComponent,
    CardItemComponent,
    ExtraInfoCardComponent,
    GuideListComponent,
    ContactInfoComponent,
    EnterpriseCardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule,
    LanguageFormModule,
    PipesModule,
    ProfileServicesModule,
    FilterModule,
    MapModule
  ],
  exports: [
    PreviewComponent,
    ProfileGuideComponent,
    EnterpriseCardComponent,
  ]
})
export class ProfileModule { }
