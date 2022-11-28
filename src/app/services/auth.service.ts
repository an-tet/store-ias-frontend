import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponse } from '../interfaces';
import { User } from '../models/User.model';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  BASE_URL: string = environment.BASE_URL;
  private _user!: AuthResponse;
  constructor(public http: HttpClient) {}

  register(user: User): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.BASE_URL}/auth/register`, user);
  }
}
