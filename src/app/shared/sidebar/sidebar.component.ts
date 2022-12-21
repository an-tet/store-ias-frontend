import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AuthResponse } from '../../interfaces/auth-response.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  closed: boolean = false;
  user!: AuthResponse;

  constructor(public authServise: AuthService, public router: Router) {
    this.user = authServise.user;
    console.log(this.user);
  }

  ngOnInit(): void {}

  toggleSideBar() {
    this.closed = !this.closed;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/autenticacion/inicio-sesion');
  }
}
