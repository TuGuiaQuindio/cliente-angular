import { Component, Input, OnInit } from '@angular/core';
import { of, map, Observable, filter } from 'rxjs';
import { AVAILABILITY_MAP } from 'src/app/constants';
import { AdditionalInformation, Language } from 'src/app/core/interfaces/guide';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  constructor() { }
  @Input() public name = '';
  @Input() public aboutMe = '';
  @Input() public languages: Language[] = [];
  @Input() public verified = false;
  @Input() public badge = [{ verified: true }];
  @Input() public profileLink = "";
  @Input() public additionalInfo?: AdditionalInformation = {
    hasTransport: false,
    firstAid: false,
    availability: ''
  };

  public get fullComplete$() {
    return `/profile/guide/${this.profileLink}`;
  }

  public get languages$() {
    return of(this.languages)
      .pipe(
        map((languages) => languages.sort((a, b) => a.level < b.level ? 1 : -1).slice(0, 3)),
      )
  }

  private get additionalInfoObs$(): Observable<AdditionalInformation> {
    return of(this.additionalInfo).pipe(
      filter(value => !!value),
      map(value => value!)
    );
  }

  public get firstAid$(): Observable<boolean> {
    return this.additionalInfoObs$
      .pipe(
        map(value => value.firstAid)
      );
  }

  public get hasTransport$(): Observable<boolean> {
    return this.additionalInfoObs$
      .pipe(
        map(value => value.hasTransport)
      )
  }

  public get availability$(): Observable<string> {
    return this.additionalInfoObs$
      .pipe(
        map(value => value.availability),
        map(availability => availability in AVAILABILITY_MAP ? AVAILABILITY_MAP[availability] : ''),
      )
  }

  ngOnInit(): void {
  }

}
