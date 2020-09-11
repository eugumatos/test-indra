import { AbstractControl } from '@angular/forms';

export class ValidateFields {
  static PasswordMatched(control: AbstractControl) {
    const password = control.get('password').value;
    const passwordMatched = control.get('passwordMatched').value;

    if (password === passwordMatched) return null;

    control.get('passwordMatched').setErrors({ notMatched: true });
  }
}
