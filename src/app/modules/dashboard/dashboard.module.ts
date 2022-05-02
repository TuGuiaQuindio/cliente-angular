import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRouting } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './components/dashboard.component';

@NgModule({
  declarations: [ DashboardComponent ],
  imports: [
    CommonModule,
    DashboardRouting,
    SharedModule,
  ],
  exports: [ DashboardRouting ]
})
export class DashboardModule { }
