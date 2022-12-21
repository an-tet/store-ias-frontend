import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models/User.model';
import { LoginForm, AuthResponse } from '../interfaces';
import { map, catchError, of, Observable, tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  BASE_URL: string = environment.BASE_URL;
  private _user!: AuthResponse;

  constructor(private http: HttpClient) {}

  get user(): AuthResponse {
    return { ...this._user };
  }

  login(loginForm: LoginForm): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${this.BASE_URL}/auth/login`,
      loginForm
    );
  }

  register(user: User): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.BASE_URL}/auth/register`, user);
  }

  validateToken(): Observable<boolean> {
    const url: string = `${this.BASE_URL}/auth/validate-token`;
    const headers: HttpHeaders = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('token')}` || ''
    );

    return this.http.get<AuthResponse>(url, { headers }).pipe(
      tap((resp) => (this._user = resp)),
      map((resp) => resp.isActive),
      catchError((err) => of(false))
    );
  }
}
