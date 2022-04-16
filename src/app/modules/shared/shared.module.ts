import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from "./components/nav/nav.component";
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './input/input.component';
import { RouterModule } from '@angular/router';
import { TitleBarComponent } from './title-bar/title-bar.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavComponent,
    ButtonComponent,
    InputComponent,
    TitleBarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    FooterComponent,
    NavComponent,
    ButtonComponent,
    InputComponent,
    TitleBarComponent,
  ]
})
export class SharedModule { }
