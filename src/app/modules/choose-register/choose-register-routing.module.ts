import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseRegisterComponent } from './choose-register.component';

const routes: Routes = [{ path: '', component: ChooseRegisterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChooseRegisterRoutingModule { }
