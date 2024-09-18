import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private token!: string;

  constructor(private http: HttpClient) {}

  // Modify the return type to expect an object with a jwt property
  sendTokenReq(username: string, password: string): Observable<{ jwt: string }> {
    let jsonReqBody = { username, password };
    let url = 'http://localhost:8092/authenticate';
    return this.http.post<{ jwt: string }>(url, jsonReqBody);
  }

  // No changes here, except that the token is passed in directly
  sendAuthReq(token: string): Observable<string> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    let url = 'http://localhost:8092/greet'; // Assuming /greet endpoint for authorization
    return this.http.get(url, { headers, responseType: 'text' });
  }

  // Optional: Store the token for later use
  setToken(token: string): void {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

}
