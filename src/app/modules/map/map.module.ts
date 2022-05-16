import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressMapComponent } from './components/address-map/address-map.component';

@NgModule({
  declarations: [
    AddressMapComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AddressMapComponent
  ]
})
export class MapModule { }
