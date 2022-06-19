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
import { SelectComponent } from './components/select/select.component';
import { StepsComponent } from './components/steps/steps.component';
import { IconButtonComponent } from './icon-button/icon-button.component';

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
    SelectComponent,
    StepsComponent,
    IconButtonComponent,
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
    PageViewComponent,
    SelectComponent,
    StepsComponent,
    IconButtonComponent
  ]
})
export class SharedModule { }
