import { Component, Injectable } from '@angular/core';
import { USER_ROLE } from 'src/app/constants';
import { AuthService } from 'src/app/core/services/auth.service';
import { CompanyExtraFormComponent } from '../components/company-extra-form/company-extra-form.component';
import { GuideExtraFormComponent } from '../components/guide-extra-form/guide-extra-form.component';
import { DashboardServicesModule } from './dashboard-services.module';

@Injectable({
  providedIn: DashboardServicesModule
})
export class ModuleSolverService {

  constructor() {
  }

  public getActiveModule() {
    const rol = localStorage.getItem(USER_ROLE);
    return rol === "1"
      ? GuideExtraFormComponent
      : CompanyExtraFormComponent;
  }
}
