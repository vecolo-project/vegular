import {Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User, UserFormData} from 'src/app/shared/models/user.model';
import {ActivatedRoute} from '@angular/router';
import {FormStatus} from 'src/app/shared/form/FormStatus';
import {format} from 'date-fns';
import {Snackbar} from 'src/app/shared/snackbar/snakbar';
import {matchPassword} from '../../../../shared/validator/password';

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
  public retrieveEditUser = new EventEmitter();

  @Output()
  public postUser = new EventEmitter<UserFormData>();

  @Output()
  public putUser = new EventEmitter<UserFormData>();

  constructor(@Inject(FormBuilder) fb, private route: ActivatedRoute, private snackBar: Snackbar) {
    this.form = fb.group(
      {
        fieldEmail: ['', [Validators.required, Validators.email]],
        fieldFirstName: ['', [Validators.required]],
        fieldLastName: ['', [Validators.required]],
        fieldPassword: ['', [Validators.minLength(7)]],
        fieldConfirmPassword: [''],
        fieldBirthDate: ['', [Validators.required]],
        fieldPseudo: ['', [Validators.required]],
        fieldRole: ['', [Validators.required]],
        fieldNewsletter: [false, [Validators.required]],
      },
      {
        validator: matchPassword('fieldPassword', 'fieldConfirmPassword')
      }
    );
  }

  ngOnInit(): void {
    if (this.isAddMode) {
      this.form.reset();
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
    const birthDate = new Date(this.form.value.fieldBirthDate);
    const user = {
      id: this.user?.id ? this.user.id : null,
      email: String(this.form.value.fieldEmail),
      firstName: String(this.form.value.fieldFirstName),
      lastName: String(this.form.value.fieldLastName),
      password: String(this.form.value.fieldPassword),
      birthDate: format(birthDate, 'yyyy-LL-dd'),
      pseudo: String(this.form.value.fieldPseudo),
      role: String(this.form.value.fieldRole),
      newsletter: String(this.form.value.fieldNewsletter),
      isActive: 'true',
    };

    if (this.isAddMode && this.form.status === FormStatus.VALID) {
      this.saveForAdd(user);
    } else {
      this.saveForEdit(user);
    }
    this.snackBar.success('Enregisté');
  }

  private saveForAdd(user: any): void {
    this.postUser.emit(user);
  }

  private saveForEdit(user: any): void {
    this.putUser.emit(user);
  }
}
