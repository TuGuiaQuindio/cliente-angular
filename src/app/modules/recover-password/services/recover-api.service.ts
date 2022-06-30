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
  public storedEmail?: string;

  public get hasToken(): boolean {
    return !!this.storedToken && this.storedToken.length > 0;
  }

  public setToken(token: string) {
    this.storedToken = token;
  }
  
  public get hasEmail() {
    return this.storedEmail && this.storedEmail.length > 0;
  }

  public setEmail(email: string) {
    this.storedEmail = email;
  }

  public changePassword(password: string, token: string) {
    return of(true);
  }
 
  public flush() {
    this.storedToken = undefined;
    this.storedEmail = undefined;
  }

  public checkEmail(email: string): Observable<any> {
    return of(true);
  }

  public verifyToken(token: string): Observable<any> {
    return of(true);
  }
}
