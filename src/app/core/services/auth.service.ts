import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { TokenResponse } from 'src/app/interfaces/token-response';
import { BasicGuideSignup } from 'src/app/interfaces/basic-guide-signup';
import { CoreModule } from '../core.module';
import { UserLoginResponse } from 'src/app/interfaces/user-login-response';

@Injectable({
  providedIn: CoreModule
})
export class AuthService {

  static TOKEN_KEY = 'auth-token';

  constructor(private http: HttpClient) { }

  public login(email: string, password: string): Observable<UserLoginResponse> {
    const data = { email, password }
    return this.http.post<UserLoginResponse>('/login', data).pipe(map((res) => {
      localStorage.setItem(AuthService.TOKEN_KEY, res.token);
      return res;
    }));
  }

  public isLoggedIn(): boolean {
    return !!localStorage.getItem(AuthService.TOKEN_KEY);
  }

  public guideSignup(values: BasicGuideSignup): Observable<any> {
    return this.http.post('', {});
  }

  public companySignup(): Observable<any> {
    return this.http.post('', {});
  }

  public getAuthToken(): string | null {
    return localStorage.getItem(AuthService.TOKEN_KEY);
  }

  public logout() {
    localStorage.removeItem(AuthService.TOKEN_KEY);
  }
}
