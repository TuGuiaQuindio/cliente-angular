import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, concatMap, delay, of, filter, map, tap, take } from 'rxjs';
import { FormProperties } from '../../shared/components/form-box-message/form-box-message.component';
import { FormServicesModule } from '../form-services.module';

type FormPropertiesMap = { [key: string]: FormProperties[] };
@Injectable({
  providedIn: FormServicesModule
})
export class FormBoxMessageQueueService {

  constructor() { }

  private queue: FormPropertiesMap = { };
  private queueSubject = new BehaviorSubject<FormPropertiesMap>(this.queue);

  store(key: string, data: FormProperties) {
    const value = this.queue[key];
    if (value) {
      value.push(data);
    } else {
      const newValue: FormProperties[] = [];
      newValue.push(data);
      this.queue[key] = newValue;
    }
    this.queueSubject.next(this.queue);
  }

  distribute(key: string): Observable<FormProperties> {
    return this.queueSubject.asObservable()
      .pipe(
        filter(x => x.hasOwnProperty(key)),
        map(x => x[key]),
        concatMap(x => x),
      );
  }

  getLastMessage(key: string): FormProperties | undefined {
    if (!key) return undefined;
    const queue = this.queue[key];
    return queue?.pop() ?? undefined;
  }
}
