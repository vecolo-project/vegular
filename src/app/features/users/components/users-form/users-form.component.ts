import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss'],
})
export class UsersFormComponent implements OnInit {
  form: FormGroup;

  @Input()
  public user: Observable<User>;

  constructor(public fp: FormBuilder) {
    this.form = fp.group({});
  }

  ngOnInit(): void {
    this.user.subscribe((user) => {
      console.log(user);
    });
  }
}
