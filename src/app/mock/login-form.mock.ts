import { FormControl } from '@angular/forms';
import { LoginForm } from '../interfaces';

export const loginForm: LoginForm = {
  username: new FormControl('prueba', { nonNullable: true }),
  password: new FormControl('23456789', { nonNullable: true }),
};
