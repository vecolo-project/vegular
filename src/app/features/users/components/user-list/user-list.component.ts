import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {HashMap} from '@datorama/akita';
import {User} from '../../../../shared/models/user.model';
import {UsersService} from '../../store/users.service';

interface userListItem {
  firstName: string;
  lastName: string;
  role: string;
}

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
  getUsers = new EventEmitter();

  public users = [{firstName: 'John', lastName: 'gg', role: 'CLIENT'}];
  public dataSource: MatTableDataSource<userListItem>;

  constructor() {
    this.dataSource = new MatTableDataSource(this.users);
  }

  ngOnInit(): void {
    setTimeout(() => this.getUsers.emit());
  }
}
