import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuideSignupComponent } from './components/guide-signup/guide-signup.component';
import { SignupChooseComponent } from './signup-choose.component';

const routes: Routes = [
  { path: '', component: SignupChooseComponent },
  { path: 'guide', component: GuideSignupComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
