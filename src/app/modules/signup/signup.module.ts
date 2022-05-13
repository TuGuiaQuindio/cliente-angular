import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupChooseComponent } from './signup-choose.component';
import { SharedModule } from '../shared/shared.module';
import { OptionCardComponent } from './components/option-card/option-card.component';
import { RouterModule } from '@angular/router';
import { GuideSignupComponent } from './components/guide-signup/guide-signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CompanySignupComponent } from './components/company-signup/company-signup.component';
import { ValidatorMatchDirective } from './directives/validator-match.directive';
import { FormServicesModule } from '../form-services/form-services.module';


@NgModule({
  declarations: [
    SignupChooseComponent,
    OptionCardComponent,
    GuideSignupComponent,
    CompanySignupComponent,
    ValidatorMatchDirective,
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
  ]
})
export class SignupModule { }
