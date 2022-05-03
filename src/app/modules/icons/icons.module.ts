import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisibilityComponent } from './components/visibility/visibility.component';
import { VisibilityOffComponent } from './components/visibility-off/visibility-off.component';



@NgModule({
  declarations: [
    VisibilityComponent,
    VisibilityOffComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VisibilityComponent,
    VisibilityOffComponent
  ]
})
export class IconsModule { }
