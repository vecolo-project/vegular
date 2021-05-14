import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {SessionService} from '../../state/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fp: FormBuilder, private sessionService: SessionService) {
    this.form = this.fp.group({
      fieldEmail: ['', [Validators.required, Validators.email]],
      fieldPassword: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  login(): void {
    console.log(this.form.value.fieldEmail + ' ' + this.form.value.fieldPassword);
    this.sessionService.login(this.form.value.fieldEmail, this.form.value.fieldPassword);
  }

}
