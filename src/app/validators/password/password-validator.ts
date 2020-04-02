import { AbstractControl } from '@angular/forms';
export class PasswordValidator {
  static MatchPassword(AC: AbstractControl) {
    let password = AC.get('password').value; // to get value in input tag
    let confirmPassword = AC.get('password_confirmation').value; // to get value in input tag
    if (password != confirmPassword) {
      AC.get('password_confirmation').setErrors({ MatchPassword: true });
    } else {
      return null;
    }
  }
}
