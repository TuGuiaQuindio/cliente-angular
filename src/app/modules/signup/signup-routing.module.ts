import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupChooseComponent } from './signup-choose.component';

const routes: Routes = [{ path: '', component: SignupChooseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
