import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileGuideComponent } from './components/profile-guide/profile-guide.component';
import { GuideListComponent } from './components/guide-list/guide-list.component';

const routes: Routes = [
  { path: 'guides', component: GuideListComponent },
  { path: 'guide/:id', component: ProfileGuideComponent },
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
