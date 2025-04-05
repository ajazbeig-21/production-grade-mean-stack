// src/app/core/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private baseUrl = 'http://localhost:5001/api';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`);
  }
  
}
