import {AbstractControl} from '@angular/forms';

export class PasswordValidator {
  static confirmPasswordValidator(control: AbstractControl): boolean {
    const password: string = control.get('fieldPassword').value;
    const confirmPassword: string = control.get('fieldConfirmPassword').value;
    if (password !== confirmPassword) {
      control.get('fieldPassword').setErrors({ passwordDidntMatch: true });
      return false;
    }
    return true;
  }
}
