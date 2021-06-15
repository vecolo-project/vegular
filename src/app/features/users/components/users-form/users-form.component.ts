import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HashMap } from '@datorama/akita';
import { Observable } from 'rxjs';
import { User } from '../../../../shared/models/user.model';
import { UsersQuery } from '../../store/users.query';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss'],
})
export class UsersFormComponent implements OnInit {
  user: Observable<HashMap<User>>;
  form: FormGroup;

  constructor(private fp: FormBuilder, private usersQuery: UsersQuery) {
    this.form = fp.group({});
  }

  ngOnInit(): void {
    this.user = this.usersQuery.selectUsers$;
    console.log(this.user);
  }
}
