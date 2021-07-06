import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private baseUrl = 'http://localhost:8080/api/v1/questions';

  constructor(private http: HttpClient, private authService: AuthService) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 
    'Authorization': `Bearer ${this.authService.getToken()}`})
  };

  findAll(): Observable<Question[]> {
    return this.http.get<Question[]>(this.baseUrl, this.httpOptions);
  }

}
