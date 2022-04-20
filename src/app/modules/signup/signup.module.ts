import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup-choose.component';
import { SharedModule } from '../shared/shared.module';
import { OptionCardComponent } from './components/option-card/option-card.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SignupComponent,
    OptionCardComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    SharedModule,
    RouterModule,
  ]
})
export class SignupModule { }
