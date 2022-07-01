import { Component, Input, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { AVAILABILITY_MAP } from 'src/app/constants';
import { AdditionalInformation, Language } from 'src/app/core/interfaces/guide';

@Component({
  selector: 'app-extra-info-card',
  templateUrl: './extra-info-card.component.html',
  styleUrls: ['./extra-info-card.component.scss'],
})
export class ExtraInfoCardComponent implements OnInit {

  constructor() { }
  @Input() public languages: Language[] = [];
  @Input() public additionalInfo?: AdditionalInformation;

  public showInfo(): Observable<{ [Property in keyof AdditionalInformation]: string }> | undefined {
    if (!this.additionalInfo) return undefined;
    const { firstAid, hasTransport, availability } = this.additionalInfo;
    return of({
      firstAid: firstAid ? "Cuenta con primeros auxilios" : "No cuenta con primeros auxilios",
      hasTransport: hasTransport ? "Cuenta con transporte particular" : "No cuenta con transporte particular",
      availability: `Disponibilidad: ${(availability in AVAILABILITY_MAP ? AVAILABILITY_MAP[availability] : "Información no disponible")}`
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
