import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupChooseComponent } from './signup-choose.component';
import { SharedModule } from '../shared/shared.module';
import { OptionCardComponent } from './components/option-card/option-card.component';
import { RouterModule } from '@angular/router';
import { GuideSignupComponent } from './components/guide-signup/guide-signup.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SignupChooseComponent,
    OptionCardComponent,
    GuideSignupComponent,
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
