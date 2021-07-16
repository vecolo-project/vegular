import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SessionService} from '../../../../core/store/session.service';
import {RouterNavigation} from '../../../../core/router/router.navigation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fp: FormBuilder, private sessionService: SessionService, private routerNavigation: RouterNavigation) {
    this.form = this.fp.group({
      fieldEmail: ['', [Validators.required, Validators.email]],
      fieldPassword: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  async login(): Promise<void> {
    await this.sessionService.login(this.form.value.fieldEmail, this.form.value.fieldPassword);
  }

  gotoForgotPassword(): void {
    this.routerNavigation.gotoForgotPassword();
 }
}
