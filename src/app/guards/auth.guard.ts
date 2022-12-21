import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> | boolean {
    return this.authService.validateToken().pipe(
      tap((valid: boolean) => {
        if (!valid) this.router.navigateByUrl('/autenticacion/inicio-sesion');
      })
    );
  }
  canLoad(): Observable<boolean> | boolean {
    return this.authService.validateToken().pipe(
      tap((valid: boolean) => {
        if (!valid) this.router.navigateByUrl('/autenticacion/inicio-sesion');
      })
    );
  }
}
