import { EventEmitter, Output } from '@angular/core';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditUser, User } from 'src/app/shared/models';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  form: FormGroup;

  @Input()
  user: User;

  @Output()
  editUser = new EventEmitter<EditUser>();

  constructor(@Inject(FormBuilder) fb) {
    this.form = fb.group({
      FIRST_NAME: ['', [Validators.required]],
      LAST_NAME: ['', [Validators.required]],
      EMAIL: ['', [Validators.required]],
      PSEUDO: ['', [Validators.required]],
      BIRTHDATE: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.form.controls.FIRST_NAME.patchValue(this.user.firstName);
    this.form.controls.LAST_NAME.patchValue(this.user.lastName);
    this.form.controls.EMAIL.patchValue(this.user.email);
    this.form.controls.PSEUDO.patchValue(this.user.pseudo);
  }
  onSubmit(): void {
    const editedUser = {
      firstName: this.form.value.FIRST_NAME,
      lastName: this.form.value.LAST_NAME,
      email: this.form.value.EMAIL,
      pseudo: this.form.value.PSEUDO,
      birthDate: this.form.value.BIRTHDATE,
    };
    this.editUser.emit(editedUser);
  }
}
