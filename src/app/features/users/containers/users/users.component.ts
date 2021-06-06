import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {HashMap} from '@datorama/akita';
import {User} from '../../../../shared/models/user.model';
import {UsersQuery} from '../../store/users.query';
import {UsersService} from '../../store/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: Observable<HashMap<User>>;
  usersIds: Observable<number[]>;
  usersLoading: Observable<boolean>;

  constructor(private usersQuery: UsersQuery, private usersService: UsersService) {
    this.users = this.usersQuery.selectUsers$;
    this.usersIds = this.usersQuery.selectIds$;
    this.usersLoading = this.usersQuery.isLoading$;
  }

  ngOnInit(): void {
  }

  getUsers(): void {
    this.usersService.getUsers();
  }

}
