import { Injectable } from '@angular/core';
import { of, tap, Observable } from 'rxjs';
import { Language, LANGUAGES_API } from 'src/app/mock/data';
import { LanguageFormServicesModule } from './language-form-services/language-form-services.module';

@Injectable({
  providedIn: LanguageFormServicesModule
})
export class LanguageApiService {

  constructor() { }

  private lastTimeFetched = 0;
  private languages?: Language[];

  public maxTimeout = 1000 * 10;

  private timeToFetch(lastTimeFetched: number) {
    const diff = Date.now() - lastTimeFetched;
    return ((diff - Number.EPSILON) > this.maxTimeout);
  }

  public getLanguagesCertifications(): Observable<Language[]> {
    return (!this.languages || this.timeToFetch(this.lastTimeFetched))
      ? of(LANGUAGES_API)
        .pipe(
          tap((values) => {
            this.languages = values;
            this.lastTimeFetched = Date.now();
            console.warn("Fetching")
          }),
        )
      : of(this.languages);
  }
}
