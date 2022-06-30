import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CheckEmailComponent } from './components/check-email/check-email.component';

const routes: Routes = [
  { path: '', component: CheckEmailComponent }
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
