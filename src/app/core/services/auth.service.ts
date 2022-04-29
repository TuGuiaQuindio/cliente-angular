import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { TokenResponse } from 'src/app/interfaces/token-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static TOKEN_KEY = 'auth-token';

  constructor(private http: HttpClient) { }

  public login(email: string, password: string): Observable<string> {
    const data = { email, password }
    return this.http.post<TokenResponse>('/login', data).pipe(map((res) => {
      console.log(res);
      localStorage.setItem(AuthService.TOKEN_KEY, res.token);
      return res.token;
    }));
  }

  public getAuthToken(): string | null {
    return localStorage.getItem(AuthService.TOKEN_KEY);
  }
}
