import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SessionService} from "../../../../core/store/session.service";
import {matchPassword} from "../../../../shared/validator/password";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  token: string;

  resetForm: FormGroup;

  constructor(private route: ActivatedRoute,
              @Inject(FormBuilder) fb,
              private sessionService: SessionService
  ) {
    this.token = route.snapshot.queryParams.token;
    this.resetForm = fb.group({
        fieldPassword: ['', [Validators.minLength(4), Validators.required]],
        fieldConfirmPassword: ['', [Validators.required]],
      },
      {
        validator: matchPassword('fieldPassword', 'fieldConfirmPassword')
      }
    );
  }

  ngOnInit(): void {
  }

  onResetPassword(): void {
    this.sessionService.resetPassword(
      this.token,
      this.resetForm.value.fieldPassword,
      this.resetForm.value.fieldConfirmPassword
    )
  }

}
