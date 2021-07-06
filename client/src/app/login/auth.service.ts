import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  client_id: string = 'ng-client';

  constructor(private readonly http: HttpClient, private router: Router) { }

  login(user: User) {
    const body =
      `client_id=${this.client_id}&username=${user.username}&password=${user.password}&grant_type=password`;

    return this.http.post<any>('http://localhost:8181/auth/realms/sergio/protocol/openid-connect/token',
      body, { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }) })
      .subscribe((res) => {
        localStorage.setItem("access_token", res.access_token);
        localStorage.setItem("refresh_token", res.refresh_token);
        this.router.navigate(['/']);
      });
  }

  logout() {
    const body =
      `client_id=${this.client_id}&refresh_token=${this.getRefreshToken()}`;
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    return this.http.post<any>('http://localhost:8181/auth/realms/sergio/protocol/openid-connect/logout'
      , body, { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }) });
  }

  refreshToken() {
    const body =
      `client_id=${this.client_id}&refresh_token=${this.getRefreshToken()}&grant_type=refresh_token`;

    return this.http.post<any>('http://localhost:8181/auth/realms/sergio/protocol/openid-connect/token',
      body, {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Bearer ${this.getToken()}`
        })
    })
      .subscribe((res) => {
        localStorage.setItem("access_token", res.access_token);
        localStorage.setItem("refresh_token", res.refresh_token);
      });
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  getRefreshToken(): string | null {
    return localStorage.getItem('refresh_token');
  }

}
