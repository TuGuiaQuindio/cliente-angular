import { Component, Injectable } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { ActiveFormComponent } from '../components/active-form/active-form.component';
import { ActiveModuleDataFormComponent } from '../components/active-module-data-form/active-module-data-form.component';
import { CompanyExtraFormComponent } from '../components/company-extra-form/company-extra-form.component';
import { GuideExtraFormComponent } from '../components/guide-extra-form/guide-extra-form.component';
import { DashboardModule } from '../dashboard.module';

@Injectable({
  providedIn: 'root'
})
export class ModuleSolverService {

  constructor() {
  }

  public getActiveModule() {
    const rol = localStorage.getItem(AuthService.USER_ROLE);
    return rol === "1"
      ? GuideExtraFormComponent
      : CompanyExtraFormComponent;
  }
}
