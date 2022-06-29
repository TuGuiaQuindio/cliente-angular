import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterSidebarComponent } from './components/filter-sidebar/filter-sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    FilterSidebarComponent,
    SearchbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    PipesModule
  ],
  exports: [
    FilterSidebarComponent
  ]
})
export class FilterModule { }
