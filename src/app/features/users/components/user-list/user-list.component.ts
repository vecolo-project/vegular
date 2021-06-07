import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HashMap } from '@datorama/akita';
import { User } from '../../../../shared/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  @Input()
  userList: HashMap<User>;

  @Input()
  usersIds: number[];

  @Input()
  loading: boolean;

  @Output()
  getUsers = new EventEmitter<{ limit: number; offset: number }>();

  constructor() {}

  ngOnInit(): void {
    console.log(this.loading);
    setTimeout(() => {
      this.getUsers.emit({ limit: 100, offset: 1 });
      console.log(this.loading);
    });
  }
}
