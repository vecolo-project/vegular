import { EventEmitter, Output } from '@angular/core';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { editedPassword, EditUser, User } from 'src/app/shared/models';
import { matchPassword } from 'src/app/shared/validator/password';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  form: FormGroup;
  formPassword: FormGroup;

  @Input()
  user: User;

  @Output()
  editUser = new EventEmitter<EditUser>();

  @Output()
  changePassword = new EventEmitter<editedPassword>();

  constructor(@Inject(FormBuilder) fb) {
    this.form = fb.group({
      FIRST_NAME: ['', [Validators.required]],
      LAST_NAME: ['', [Validators.required]],
      EMAIL: ['', [Validators.required, Validators.email]],
      PSEUDO: ['', [Validators.required]],
    });
    this.formPassword = fb.group(
      {
        ACTUAL_PASSWORD: ['', [Validators.required, Validators.minLength(4)]],
        NEW_PASSWORD: ['', [Validators.required, Validators.minLength(4)]],
        CONFIRM_NEW_PASSWORD: [
          '',
          [Validators.required, Validators.minLength(4)],
        ],
      },
      {
        validator: matchPassword('NEW_PASSWORD', 'CONFIRM_NEW_PASSWORD'),
      }
    );
  }

  ngOnInit(): void {
    this.form.controls.FIRST_NAME.patchValue(this.user.firstName);
    this.form.controls.LAST_NAME.patchValue(this.user.lastName);
    this.form.controls.EMAIL.patchValue(this.user.email);
    this.form.controls.PSEUDO.patchValue(this.user.pseudo);
  }

  onSubmitProfile(): void {
    const editedUser = {
      firstName: String(this.form.value.FIRST_NAME),
      lastName: String(this.form.value.LAST_NAME),
      email: String(this.form.value.EMAIL),
      pseudo: String(this.form.value.PSEUDO),
    };
    this.editUser.emit(editedUser);
  }

  onSubmitPassword(): void {
    const editedPassword = {
      actualPassword: String(this.formPassword.value.ACTUAL_PASSWORD),
      newPassword: String(this.formPassword.value.NEW_PASSWORD),
      confirmNewPassword: String(this.formPassword.value.CONFIRM_NEW_PASSWORD),
    };
    this.changePassword.emit(editedPassword);
  }
}
