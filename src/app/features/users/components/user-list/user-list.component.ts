import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HashMap } from '@datorama/akita';
import { SessionQuery } from '../../../../core/store/session.query';
import { User } from '../../../../shared/models/user.model';
import { UsersService } from '../../store/users.service';
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

  @Input()
  sessionQuery: SessionQuery;

  @Input()
  deleteUser = Function;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.getUsers.emit({ limit: 100, offset: 1 });
    });
  }
}
