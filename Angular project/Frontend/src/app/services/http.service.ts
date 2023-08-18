import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class HTTPService {
  constructor(private http: HttpClient) { }

  public makeRequest(): Observable<object> {
    const url = 'http://localhost:3000/';
    return this.http.get<object>(url);
  }

  public makeRegisterRequest(body: any): Observable<any> {
    const url = 'http://localhost:3000/register';
    const options: any= {
    headers: {
      'Content-Type': 'application/json'
    },
    observe: 'response',
    responseType: 'json'
    };
    return this.http.post<any>(url, body, options);
  }

  public makeLoginRequest(body: any): Observable<any> {  
    const url = 'http://localhost:3000/login';
    const options: any= {
      headers: {
        'Content-Type': 'application/json'
      },
      observe: 'response',
      responseType: 'json'
    };
    return this.http.post<any>(url, body, options);
  }

  public getUserDatabyToken(): Observable<object> {  
    const url = 'http://localhost:3000/protected';
    const options: any = {
      headers: {
        'Content-Type': 'application/json',
            'authorization':  sessionStorage.getItem('token')
            },
            observe: 'response',
            responseType: 'json'
            };
            return this.http.get<object>(url, options);
            }
  public createResetPasswordToken(email: any): Observable<any> {  
    const url = 'http://localhost:3000/forgot-password';
    const options: any = {
      headers: {
        'Content-Type': 'application/json',
      },
      observe: 'response',
      responseType: 'json'
    };

    return this.http.post<any>(url, email, options);
  }         
}