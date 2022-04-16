import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChooseRegisterRoutingModule } from './choose-register-routing.module';
import { ChooseRegisterComponent } from './choose-register.component';
import { SharedModule } from '../shared/shared.module';
import { OptionCardComponent } from './components/option-card/option-card.component';


@NgModule({
  declarations: [
    ChooseRegisterComponent,
    OptionCardComponent
  ],
  imports: [
    CommonModule,
    ChooseRegisterRoutingModule,
    SharedModule,
  ]
})
export class ChooseRegisterModule { }
