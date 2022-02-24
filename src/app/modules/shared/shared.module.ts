import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from "./components/nav/nav.component";
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavComponent,
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
