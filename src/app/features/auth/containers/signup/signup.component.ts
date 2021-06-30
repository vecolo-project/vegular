import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {SessionService} from '../../../../core/store/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  password: string;

  constructor(private fp: FormBuilder, private sessionService: SessionService) {
    this.form = this.fp.group({
      fieldEmail: ['', [Validators.required, Validators.email]],
      fieldPassword: ['', [Validators.required]],
      fieldPasswordConfirm: ['', [Validators.required, this.confirmPassword()]]
    });
  }

  confirmPassword(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      return this.password === control.value ? null : {confirmPassword: {value: control.value}};
    };

  }

  ngOnInit(): void {
  }

}
