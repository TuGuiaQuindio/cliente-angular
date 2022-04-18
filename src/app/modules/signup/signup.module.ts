import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { SharedModule } from '../shared/shared.module';
import { OptionCardComponent } from './components/option-card/option-card.component';


@NgModule({
  declarations: [
    SignupComponent,
    OptionCardComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    SharedModule,
  ]
})
export class SignupModule { }
