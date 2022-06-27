import { Component, Input, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Language } from '../../preview/preview.component';

export type AdditionalInformation = { firstAid: boolean, hasTransport: boolean, availability: string };
@Component({
  selector: 'app-extra-info-card',
  templateUrl: './extra-info-card.component.html',
  styleUrls: ['./extra-info-card.component.scss'],
})
export class ExtraInfoCardComponent implements OnInit {

  constructor() { }
  @Input() public languages: Language[] = [
    { name: 'Alemán', level: 5.0 },
    { name: 'Alemán', level: 2.5 },
    { name: 'Alemán', level: 4.2 },
    { name: 'Alemán', level: 3.5 },
  ];

  @Input() public additionalInfo?: AdditionalInformation = {
    firstAid: false,
    availability: 'weekends',
    hasTransport: false,
  };

  private availabilityMap: { [key: string]: string } = {
    "full": "Toda la semana",
    "weekends": "Fines de semana",
    "weekdays": "Entre semana",
  }

  public showInfo(): Observable<{ [Property in keyof AdditionalInformation]: string }> | undefined {
    if (!this.additionalInfo) return undefined;
    const { firstAid, hasTransport, availability } = this.additionalInfo;
    return of({
      firstAid: firstAid ? "Cuenta con primeros auxilios" : "No cuenta con primeros auxilios",
      hasTransport: hasTransport ? "Cuenta con transporte particular" : "No cuenta con transporte particular",
      availability: `Disponibilidad: ${(availability in this.availabilityMap ? this.availabilityMap[availability] : "Información no disponible")}`
    });
  }

  public get firstAid$() {
    return this.showInfo()?.pipe(
      map(info => info.firstAid)
    )
  }

  public get availability$() {
    return this.showInfo()?.pipe(
      map(info => info.availability)
    )
  }

  public get hasTransport$() {
    return this.showInfo()?.pipe(
      map(info => info.hasTransport)
    )
  }

  ngOnInit(): void {
  }
}
