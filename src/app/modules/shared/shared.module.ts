import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';

import { NavComponent } from "./components/nav/nav.component";
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './input/input.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBoxMessageComponent } from './components/form-box-message/form-box-message.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { AnchorDirective } from 'src/app/directive/anchor.directive';
import { PageViewComponent } from './components/page-view/page-view.component';

@NgModule({
  declarations: [
    AnchorDirective,
    FooterComponent,
    NavComponent,
    ButtonComponent,
    InputComponent,
    TitleBarComponent,
    FormBoxMessageComponent,
    CheckboxComponent,
    PageViewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    IconsModule
  ],
  exports: [
    AnchorDirective,
    FooterComponent,
    NavComponent,
    ButtonComponent,
    InputComponent,
    TitleBarComponent,
    FormBoxMessageComponent,
    CheckboxComponent,
    PageViewComponent
  ]
})
export class SharedModule { }
