import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileGuideComponent } from './components/profile-guide/profile-guide.component';

const routes: Routes = [
  { path: 'guide/:id', component: ProfileGuideComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
