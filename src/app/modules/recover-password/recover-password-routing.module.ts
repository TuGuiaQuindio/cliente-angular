import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CheckEmailComponent } from './components/check-email/check-email.component';
import { VerifyTokenComponent } from './components/verify-token/verify-token.component';
import { PasswordChangeComponent } from './components/password-change/password-change.component';

const routes: Routes = [
  { path: '', component: CheckEmailComponent },
  { path: 'token', component: VerifyTokenComponent },
  { path: 'password', component: PasswordChangeComponent },
  { path: 'password/:token', component: PasswordChangeComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RecoverPasswordRoutingModule { }
