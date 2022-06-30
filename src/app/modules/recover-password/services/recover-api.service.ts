import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RecoverPasswordServicesModule } from '../recover-password-services.module';

@Injectable({
  providedIn: RecoverPasswordServicesModule
})
export class RecoverApiService {

  constructor(private http: HttpClient) { }

  public checkEmail(email: string): Observable<any> {
    return of(true);
  }
}
