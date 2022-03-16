import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from "./components/nav/nav.component";
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavComponent,
    ButtonComponent,
    InputComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    NavComponent,
    ButtonComponent,
    InputComponent,
  ]
})
export class SharedModule { }
