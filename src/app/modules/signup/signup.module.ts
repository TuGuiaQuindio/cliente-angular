import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapModule } from '../map/map.module';
import { SignupRoutingModule } from './signup-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ValidatorMatchDirective } from './directives/validator-match.directive';

import { SignupChooseComponent } from './signup-choose.component';
import { OptionCardComponent } from './components/option-card/option-card.component';
import { RouterModule } from '@angular/router';
import { GuideSignupComponent } from './components/guide-signup/guide-signup.component';
import { CompanySignupComponent } from './components/company-signup/company-signup.component';


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
    MapModule,
  ]
})
export class SignupModule { }
