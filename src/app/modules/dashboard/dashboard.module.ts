import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRouting } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LinkAccessCardComponent } from './components/link-access-card/link-access-card.component';
import { DecisionButtonContainerComponent } from './components/decision-button-container/decision-button-container.component';

@NgModule({
  declarations: [ 
    DashboardComponent, LinkAccessCardComponent, DecisionButtonContainerComponent
  ],
  imports: [
    CommonModule,
    DashboardRouting,
    SharedModule,
  ],
  exports: [ DashboardRouting ]
})
export class DashboardModule { }
