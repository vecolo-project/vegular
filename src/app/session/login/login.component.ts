import {Component, OnInit} from '@angular/core';
import {SessionService} from '../state/session.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {login} from '../state/session.actions';
import {Actions} from '@datorama/akita-ng-effects';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private action: Actions, private fp: FormBuilder, private router: Router) {
    this.form = this.fp.group({
      fieldEmail: ['', [Validators.required, Validators.email]],
      fieldPassword: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  login(): void {
    this.action.dispatch(login({
      email: this.form.value.fieldEmail,
      password: this.form.value.fieldPassword
    }));
  }

}
