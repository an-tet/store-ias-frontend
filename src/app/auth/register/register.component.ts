import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import swal from 'sweetalert2';
import { AuthResponse, RegisterForm } from '../../interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = this.fb.group<RegisterForm>({
    firstName: this.fb.nonNullable.control('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),
    lastName: this.fb.nonNullable.control('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),
    username: this.fb.nonNullable.control('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),
    email: this.fb.nonNullable.control('', {
      validators: [Validators.required, Validators.email],
    }),
    password: this.fb.nonNullable.control('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),
    passwordConfirmed: this.fb.nonNullable.control('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),
  });

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.registerForm.invalid) return;

    swal.fire({
      title: 'Cargando',
      allowOutsideClick: false,
      didOpen: () => {
        swal.showLoading(null);
        setTimeout(() => {
          // test without fields
          // this.registerForm.removeControl('lastName');
          this.authService.register(this.registerForm.value).subscribe({
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

  get lastName() {
    return this.registerForm.get('lastName');
  }

  get firstName() {
    return this.registerForm.get('firstName');
  }

  get username() {
    return this.registerForm.get('username');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get passwordConfirmed() {
    return this.registerForm.get('passwordConfirmed');
  }
}
