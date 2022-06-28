import { Injectable } from '@angular/core';
import { ProfileServicesModule } from '../profile-services.module';
import { faker } from '@faker-js/faker/locale/es';
import { Guide } from 'src/app/core/interfaces/guide';
import { Language } from '../preview/preview.component';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: ProfileServicesModule
})
export class GuideDataService {

  guides?: Guide[];

  constructor() { }
  public getAllGuides(): Observable<Guide[]> {
    const createGuide = (): Guide => {
      return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        aboutMe: faker.helpers.maybe(() => faker.lorem.paragraphs(Math.floor(Math.random() * 3 + 1)), { probability: 0.65 }),
        languages: Array.from({length: Math.floor(Math.random() * 10)},
          () => ({
            name: faker.word.noun(),
            level: Math.floor(Math.random() * 5000) / 1000
          })
        ),
        additionalInformation: {
          availability: faker.helpers.arrayElement(['full', 'weekday', 'weekend']),
          firstAid: Math.random() > 0.5,
          hasTransport: Math.random() > 0.5,
        },
        verified: Math.random() > 0.7,
      }
    }
    if (!this.guides) {
      this.guides = Array.from({length: 50}, createGuide);
    }
    return of(this.guides);
  }
}
