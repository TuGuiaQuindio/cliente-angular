import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { TokenResponse } from 'src/app/interfaces/token-response';
import { BasicGuideSignup } from 'src/app/interfaces/basic-guide-signup';
import { CoreModule } from '../core.module';
import { UserLoginResponse } from 'src/app/interfaces/user-login-response';
import { BasicCompanySignup } from 'src/app/interfaces/basic-company-signup';

@Injectable({
  providedIn: CoreModule
})
export class AuthService {

  static TOKEN_KEY = 'auth-token';
  static USER_NAME = 'username';
  static USER_ROLE = 'role';

  constructor(private http: HttpClient) { }

  public login(email: string, password: string): Observable<UserLoginResponse> {
    const data = { email, password }
    return this.http.post<UserLoginResponse>('/login', data).pipe(map((res: any) => {
      const { token, name, role } = res.result;
      localStorage.setItem(AuthService.TOKEN_KEY, token);
      localStorage.setItem(AuthService.USER_NAME, name);
      localStorage.setItem(AuthService.USER_ROLE, role.toString());
      return res.result as UserLoginResponse;
    }));
  }

  public isLoggedIn(): boolean {
    return !!localStorage.getItem(AuthService.TOKEN_KEY);
  }

  public guideSignup(values: BasicGuideSignup): Observable<any> {
    const { NoDocument, firstName, lastName, email, password } = values;
    if (!NoDocument || !firstName || !lastName || !email || !password) throw new Error('DataError: one or more values are undefined');

    const rolInfo = {
      email: values.email,
      rol: 1
    }
    
    const signupData = {
      NoDocument, firstName, lastName, password, rol: rolInfo
    }
    return this.http.post('/signup/guide', signupData);
  }

  public companySignup(values: BasicCompanySignup): Observable<any> {
    const { nit, companyName: nameCompany, address, password, email } = values;
    if (!nit || !nameCompany || !address || !password || !email) throw new Error('DataError: one or more values are undefined');
    const rol = {
      email: values.email,
      rol: 2,
    }
    const signupData = { nit, nameCompany, address, password, rol };
    return this.http.post('/signup/company', signupData);
  }

  public getAuthToken(): string | null {
    return localStorage.getItem(AuthService.TOKEN_KEY);
  }

  public logout() {
    localStorage.removeItem(AuthService.TOKEN_KEY);
  }
}
