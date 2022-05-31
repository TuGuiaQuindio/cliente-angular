import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRouting } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LinkAccessCardComponent } from './components/link-access-card/link-access-card.component';
import { DecisionButtonContainerComponent } from './components/decision-button-container/decision-button-container.component';
import { SlideshowModule } from '../slideshow/slideshow.module';
import { ActiveModuleDataFormComponent } from './components/active-module-data-form/active-module-data-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GuideExtraFormComponent } from './components/guide-extra-form/guide-extra-form.component';
import { CompanyExtraFormComponent } from './components/company-extra-form/company-extra-form.component';
import { DashboardServicesModule } from './services/dashboard-services.module';

@NgModule({
  declarations: [ 
    DashboardComponent, 
    LinkAccessCardComponent,
    DecisionButtonContainerComponent,
    ActiveModuleDataFormComponent,
    GuideExtraFormComponent,
    CompanyExtraFormComponent,
  ],
  imports: [
    CommonModule,
    DashboardRouting,
    SharedModule,
    SlideshowModule,
    ReactiveFormsModule,
    DashboardServicesModule,
  ],
  exports: [ DashboardRouting ]
})
export class DashboardModule { }
