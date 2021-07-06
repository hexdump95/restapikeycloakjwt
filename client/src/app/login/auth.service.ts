import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  client_id: string = 'ng-client';

  constructor(private readonly http: HttpClient) { }

  login(user: User) {
    const body =
      `client_id=${this.client_id}&username=${user.username}&password=${user.password}&grant_type=password`;

    return this.http.post<any>('http://localhost:8181/auth/realms/sergio/protocol/openid-connect/token',
      body, { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }) });
  }

}
