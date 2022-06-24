import { AfterViewInit, Component, EventEmitter, HostBinding, Input, Optional, Output, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import * as Leaflet from 'leaflet';

import { icon, Marker } from 'leaflet';
import { InputValueAccessor } from 'src/app/classes/input-value-accessor';
import { WarningMessenger } from 'src/app/interfaces/warning-messenger';
const iconRetinaUrl = 'assets/images/leaflet/marker-icon-tg-2x.png';
const iconUrl = 'assets/images/leaflet/marker-icon-tg.png';
const shadowUrl = 'assets/images/leaflet/marker-shadow-tg.png';
const iconDefault = icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [32, 44],
  iconAnchor: [16, 44],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [58, 44]
});
Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-address-map',
  templateUrl: './address-map.component.html',
  styleUrls: ['./address-map.component.scss'],
  providers: [ { provide: InputValueAccessor, useExisting: AddressMapComponent } ]
})
export class AddressMapComponent extends InputValueAccessor implements AfterViewInit {

  private map? : Leaflet.Map = undefined;
  private marker = Leaflet.marker([0,0]);
  @Input() public label = "";
  @Output() public mapLocation = new EventEmitter<Leaflet.LatLngTuple>();

  @HostBinding('class.warning')
  public get showWarning() {
    return this.warningMsg.length != 0;
  }

  constructor(@Optional() @Self() ngControl: NgControl) {
    super(ngControl);
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = Leaflet.map('map', {
      center: [ 4.4265, -75.7109 ],
      zoom: 10,
    });

    const tiles = Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    })

    tiles.addTo(this.map);

    this.map.on('click', (e: Leaflet.LeafletEvent) => {
      this.onMapClick(e as Leaflet.LocationEvent);
    })
  }

  private onMapClick(e: Leaflet.LocationEvent): void {
    if (!this.map) return;
    this.marker.bindPopup(`Has seleccionado ${e.latlng} como ubicación`).openPopup();
    this.marker.setLatLng(e.latlng).addTo(this.map);
    this.map.flyTo(e.latlng);
    const { lat, lng } = e.latlng; 
    this.mapLocation.emit([lat, lng]);
    this.ngControl.control!.setValue(`(${lat}, ${lng})`)
  }

}
