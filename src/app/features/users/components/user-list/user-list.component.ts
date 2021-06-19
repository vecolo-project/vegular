import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../../../shared/models/user.model';
import {UsersService} from '../../store/users.service';
import {SessionQuery} from "../../../../core/store/session.query";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  @Input()
  userListArray: User[];

  @Input()
  usersCount: number;

  @Input()
  loading: boolean;

  @Input()
  isAdmin: boolean;

  @Output()
  getUsers = new EventEmitter<{ limit: number; offset: number }>();

  @Output()
  deleteUser = new EventEmitter<number>();

  @Output()
  setEditUser = new EventEmitter<number>();

  displayedColumns = ['id', 'firstName', 'lastName', 'email', 'role', 'actions'];

  constructor() {
  }

  ngOnInit(): void {
    this.getUsersF(10, 1);
  }

  getUsersF(limit, offset): void {
    setTimeout(() => {
      this.getUsers.emit({limit, offset});
    });
  }
}
