import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthResponse, LoginForm } from 'src/app/interfaces';
import { AuthService } from '../../services/auth.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.fb.group<LoginForm>({
    username: this.fb.nonNullable.control('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),
    password: this.fb.nonNullable.control('', {
      validators: [Validators.required, Validators.minLength(8)],
    }),
  });

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.loginForm.invalid);

    if (this.loginForm.invalid) return;

    swal.fire({
      title: 'Cargando',
      allowOutsideClick: false,
      didOpen: () => {
        swal.showLoading(null);
        setTimeout(() => {
          // test without fields
          // this.loginForm.removeControl('lastName');
          this.authService.login(this.loginForm.value).subscribe({
            next: (resp: AuthResponse) => {
              localStorage.setItem('token', resp.token);
              swal.close();
              this.router.navigateByUrl('/tienda');
            },
            error: ({ error }) => {
              swal.fire({
                title: 'Hubo un error',
                icon: 'error',
                text: error.message,
              });
            },
          });
        }, 1000);
      },
    });
  }

  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }
}
