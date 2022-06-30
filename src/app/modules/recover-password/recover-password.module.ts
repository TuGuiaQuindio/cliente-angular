import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecoverPasswordRoutingModule } from './recover-password-routing.module';
import { CheckEmailComponent } from './components/check-email/check-email.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RecoverPasswordServicesModule } from './recover-password-services.module';
import { VerifyTokenComponent } from './components/verify-token/verify-token.component';
import { PasswordChangeComponent } from './components/password-change/password-change.component';

@NgModule({
  declarations: [
    CheckEmailComponent,
    VerifyTokenComponent,
    PasswordChangeComponent
  ],
  imports: [
    CommonModule,
    RecoverPasswordRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    RecoverPasswordServicesModule
  ]
})
export class RecoverPasswordModule { }
