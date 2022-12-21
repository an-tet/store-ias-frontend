import { FormControl, FormGroup } from '@angular/forms';
export interface RegisterForm {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  username: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
  passwordConfirmed: FormControl<string>;
}
