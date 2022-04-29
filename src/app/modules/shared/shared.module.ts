import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavComponent } from "./components/nav/nav.component";
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './input/input.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBoxMessageComponent } from './components/form-box-message/form-box-message.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavComponent,
    ButtonComponent,
    InputComponent,
    TitleBarComponent,
    FormBoxMessageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    FooterComponent,
    NavComponent,
    ButtonComponent,
    InputComponent,
    TitleBarComponent,
    FormBoxMessageComponent,
  ]
})
export class SharedModule { }
