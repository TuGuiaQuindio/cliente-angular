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
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { InputCurrencyComponent } from './input-currency/input-currency.component';
import { BadgeComponent } from './components/badge/badge.component';
import { LabelIconComponent } from './components/label-icon/label-icon.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { PipesModule } from '../pipes/pipes.module';

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
    DropdownComponent,
    InputCurrencyComponent,
    BadgeComponent,
    LabelIconComponent,
    AvatarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    IconsModule,
    PipesModule
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
    IconButtonComponent,
    DropdownComponent,
    InputCurrencyComponent,
    BadgeComponent,
    LabelIconComponent,
    AvatarComponent
  ]
})
export class SharedModule { }
