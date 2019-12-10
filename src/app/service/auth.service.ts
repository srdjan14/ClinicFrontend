import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  public registration(body: any): Observable<any> {
    return this.http.post(this.baseUrl + '/patients', body)
  }

  public login(body: any): Observable<any> {
    return this.http.post(this.baseUrl + '/auth/login', body);
  }

}
