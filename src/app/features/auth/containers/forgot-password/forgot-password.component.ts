import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SessionService } from '../../../../core/store/session.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  mailForm = new FormControl('', [Validators.required, Validators.email]);

  constructor(private sessionService: SessionService) {}

  ngOnInit(): void {}

  onForgotPasswordSubmit() {
    this.sessionService.forgotPassword(this.mailForm.value);
    // this.mailForm.patchValue(null);
  }
}
