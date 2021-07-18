import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function matchPassword(firstControl, secondControl): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {
    const password: AbstractControl = control.get(firstControl);
    const confirm: AbstractControl = control.get(secondControl);

    if (password.value !== confirm.value) {
      return {noMatch: true};
    }

    return null;
  };
}

