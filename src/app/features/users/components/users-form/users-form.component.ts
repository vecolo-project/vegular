import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss'],
})
export class UsersFormComponent implements OnInit, OnChanges {
  form: FormGroup;

  @Input()
  public user: User;

  @Input()
  public isAddMode: boolean;

  @Output()
  public retrieveEditUser = new EventEmitter<any>();

  @Output()
  public saveUser = new EventEmitter<User>();

  constructor(private fp: FormBuilder, private route: ActivatedRoute) {
    this.form = this.fp.group({
      fieldEmail: ['', [Validators.required, Validators.email]],
      fieldFirstName: ['', [Validators.required]],
      fieldLastName: ['', [Validators.required]],
      fieldPassword: [''],
      fieldConfirmPassword: [''],
      fieldBirthDate: ['', [Validators.required]],
      fieldPseudo: ['', [Validators.required]],
      fieldRole: ['', [Validators.required]],
      fieldNewsletter: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    if (this.isAddMode) {
      return;
    }
    if (!this.user) {
      setTimeout(() => {
        this.retrieveEditUser.emit();
      });
    } else {
      this.form.controls.fieldEmail.patchValue(this.user.email);
      this.form.controls.fieldFirstName.patchValue(this.user.firstName);
      this.form.controls.fieldLastName.patchValue(this.user.lastName);
      this.form.controls.fieldBirthDate.patchValue(this.user.birthDate);
      this.form.controls.fieldPseudo.patchValue(this.user.pseudo);
      this.form.controls.fieldRole.patchValue(this.user.role);
      this.form.controls.fieldNewsletter.patchValue(this.user.newsletter);
    }
  }

  ngOnChanges(): void {
    if (this.user) {
      this.form.controls.fieldEmail.patchValue(this.user.email);
      this.form.controls.fieldFirstName.patchValue(this.user.firstName);
      this.form.controls.fieldLastName.patchValue(this.user.lastName);
      this.form.controls.fieldBirthDate.patchValue(this.user.birthDate);
      this.form.controls.fieldPseudo.patchValue(this.user.pseudo);
      this.form.controls.fieldRole.patchValue(this.user.role);
      this.form.controls.fieldNewsletter.patchValue(this.user.newsletter);
    }
  }

  save(): void {
    if (this.isAddMode) {
      this.saveForAdd();
    } else {
      this.saveForEdit();
    }
  }

  private saveForAdd(): void {
    const user = {
      id: null,
      email: this.form.value.fieldEmail,
      firstName: this.form.value.fieldFirstName,
      lastName: this.form.value.fieldLastName,
      password: this.form.value.fieldPassword,
      birthDate: this.form.value.fieldBirthDate,
      pseudo: this.form.value.fieldPseudo,
      role: this.form.value.fieldRole,
      newsletter: this.form.value.fieldNewsletter,
    };
    this.saveUser.emit(user);
  }

  private saveForEdit(): void {
    const userProps = {
      email: this.form.value.fieldEmail,
      firstName: this.form.value.fieldFirstName,
      lastName: this.form.value.fieldLastName,
      password: this.form.value.fieldPassword,
      birthDate: this.form.value.fieldBirthDate,
      pseudo: this.form.value.fieldPseudo,
      role: this.form.value.fieldRole,
      newsletter: this.form.value.fieldNewsletter,
    };
    const newUser = { ...this.user, ...userProps };
    this.saveUser.emit(newUser);
  }
}
