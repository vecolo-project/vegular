import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  form: FormGroup;

  constructor(private fp: FormBuilder) {
    this.form = this.fp.group({
      fieldEmail: ['', [Validators.required, Validators.email]],
    });
  }

  async ngOnInit(): Promise<void> {}
}
