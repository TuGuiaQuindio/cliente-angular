import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export let FormServicesInjector: Injector;

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ ]
})
export class FormServicesModule {
  constructor(private injector: Injector) {
    FormServicesInjector = injector;
  }
}
