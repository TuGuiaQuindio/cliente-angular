import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TOKEN_KEY } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class DataFormService {

  constructor(private http: HttpClient) { }

  completeData(signupData: any): Observable<Object> {
    const { urlSuffix } = signupData;
    const token = localStorage.getItem(TOKEN_KEY);
    return this.http.post(`${urlSuffix}/completeData`, signupData, { headers: new HttpHeaders().set("Authorization", `Bearer ${token}`) })
  }
}
