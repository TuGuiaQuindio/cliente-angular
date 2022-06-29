import { Injectable } from '@angular/core';
import { ProfileServicesModule } from '../profile-services.module';
import { faker } from '@faker-js/faker/locale/es';
import { Guide } from 'src/app/core/interfaces/guide';
import { concatMap, find, Observable, of } from 'rxjs';

@Injectable({
  providedIn: ProfileServicesModule
})
export class GuideDataService {

  guides?: Observable<Guide[]>;

  constructor() { }
  public getAllGuides(): Observable<Guide[]> {
    const createGuide = (): Guide => {
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      return {
        firstName,
        lastName,
        aboutMe: faker.helpers.maybe(() => faker.lorem.paragraphs(Math.floor(Math.random() * 3 + 1)), { probability: 0.65 }),
        birthdate: faker.date.birthdate().toString(),
        city: faker.address.cityName(),
        publicId: `${firstName.split(' ')[0]}.${lastName.split(' ')[0]}.${faker.random.numeric(5)}`.toLowerCase(),
        languages: Array.from({ length: Math.floor(Math.random() * 10) },
          () => ({
            name: faker.word.noun(),
            level: Math.floor(Math.random() * 5000) / 1000
          })
        ),
        additionalInformation: {
          availability: faker.helpers.arrayElement(['full', 'weekdays', 'weekends']),
          firstAid: Math.random() > 0.5,
          hasTransport: Math.random() > 0.5,
        },
        contactInformation: {
          tel: faker.phone.number('###-?###-?####'),
          email: faker.internet.exampleEmail(firstName, lastName)
        },
        verified: Math.random() > 0.7,
      }
    }
    if (!this.guides) {
      this.guides = of(Array.from({ length: 50 }, createGuide));
    }
    return this.guides;
  }

  getGuideById(id: string): Observable<Guide | undefined> {
    return this.guides?.pipe(
      concatMap((guides) => guides),
      find(({ publicId }) => publicId == id)
    ) ?? of(undefined);
  }
}
