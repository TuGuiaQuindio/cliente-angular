import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { TokenResponse } from 'src/app/interfaces/token-response';
import { BasicGuideSignup } from 'src/app/interfaces/basic-guide-signup';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class AuthService {

  static TOKEN_KEY = 'auth-token';
  static VALID_ROLES = [1, 2];

  constructor(private http: HttpClient) { }

  public login(email: string, password: string): Observable<string> {
    const data = { email, password }
    return this.http.post<TokenResponse>('/login', data).pipe(map((res) => {
      console.log(res);
      localStorage.setItem(AuthService.TOKEN_KEY, res.token);
      return res.token;
    }));
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem(AuthService.TOKEN_KEY) != null;
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
}
