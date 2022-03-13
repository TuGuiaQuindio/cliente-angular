import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from "./components/nav/nav.component";
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    NavComponent
  ]
})
export class SharedModule { }
