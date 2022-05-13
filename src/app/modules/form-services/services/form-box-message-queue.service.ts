import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, concatMap, delay, of, filter, map, tap, take } from 'rxjs';
import { FormProperties } from '../../shared/components/form-box-message/form-box-message.component';
import { FormServicesModule } from '../form-services.module';

type FormPropertiesMap = { [key: string]: FormProperties };
@Injectable({
  providedIn: FormServicesModule
})
export class FormBoxMessageQueueService {

  constructor() { }

  private queue: FormPropertiesMap = { };
  private queueSubject = new BehaviorSubject<FormPropertiesMap>(this.queue);

  store(key: string, data: FormProperties) {
    this.queue[key] = data;
  }

  distribute(key: string): Observable<FormProperties | undefined> {
    return this.queueSubject.asObservable()
      .pipe(
        filter(x => x.hasOwnProperty(key)),
        map(x => x[key]),
      );
  }

  getLastMessage(key: string): FormProperties | undefined {
    if (!key) return undefined;
    return this.queue[key];
  }
}
