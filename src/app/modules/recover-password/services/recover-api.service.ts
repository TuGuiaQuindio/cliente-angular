import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RecoverPasswordServicesModule } from '../recover-password-services.module';

@Injectable({
  providedIn: RecoverPasswordServicesModule
})
export class RecoverApiService {

  constructor(private http: HttpClient) { }

  public storedToken?: string;
  public get hasToken() {
    return this.storedToken && this.storedToken.length > 0;
  }
  public setToken(token: string) {
    this.storedToken = token;
  }

  public checkEmail(email: string): Observable<any> {
    return of(true);
  }

  public verifyToken(token: string): Observable<any> {
    return of(true);
  }
}
