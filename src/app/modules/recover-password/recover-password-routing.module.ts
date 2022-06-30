import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CheckEmailComponent } from './components/check-email/check-email.component';
import { VerifyTokenComponent } from './components/verify-token/verify-token.component';

const routes: Routes = [
  { path: '', component: CheckEmailComponent },
  { path: 'token', component: VerifyTokenComponent },
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
