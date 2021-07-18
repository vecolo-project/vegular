import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SessionService} from 'src/app/core/store/session.service';
import {matchPassword} from 'src/app/shared/validator/password';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  SITE_KEY: string;


  constructor(@Inject(FormBuilder) fb, private sessionService: SessionService) {
    this.form = fb.group(
      {
        FIRST_NAME: ['', [Validators.required]],
        LAST_NAME: ['', [Validators.required]],
        EMAIL: ['', [Validators.required, Validators.email]],
        PSEUDO: ['', [Validators.required]],
        PASSWORD: ['', [Validators.required, Validators.minLength(6)]],
        CONFIRM_PASSWORD: ['', [Validators.required, Validators.minLength(6)]],
        BIRTH_DATE: ['', [Validators.required]],
        NEWSLETTER: [''],
        CAPTCHA: ['', [Validators.required]],
      },
      {
        validator: matchPassword('PASSWORD', 'CONFIRM_PASSWORD'),
      }
    );
    this.SITE_KEY = environment.CAPTCHA_KEY;
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const birthDate = new Date(this.form.value.BIRTH_DATE);
    const user = {
      firstName: String(this.form.value.FIRST_NAME),
      lastName: String(this.form.value.LAST_NAME),
      email: String(this.form.value.EMAIL),
      password: String(this.form.value.PASSWORD),
      birthDate,
      pseudo: String(this.form.value.PSEUDO),
    };
    this.sessionService.register(user, this.form.value.CAPTCHA);
  }

  resolveCaptcha($event: string): void {
    this.form.controls.CAPTCHA.patchValue($event);
  }

}
