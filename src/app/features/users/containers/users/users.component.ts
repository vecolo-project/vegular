import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HashMap } from '@datorama/akita';
import { User } from '../../../../shared/models/user.model';
import { UsersQuery } from '../../store/users.query';
import { UsersService } from '../../store/users.service';
import { SessionQuery } from '../../../../core/store/session.query';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: Observable<HashMap<User>>;
  usersIds: Observable<number[]>;
  usersLoading: Observable<boolean>;

  constructor(
    private usersQuery: UsersQuery,
    private usersService: UsersService,
    public sessionQuery: SessionQuery,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.users = this.usersQuery.selectUsers$;
    this.usersIds = this.usersQuery.selectIds$;
    this.usersLoading = this.usersQuery.isLoading$;
  }

  ngOnInit(): void {}

  isListMode(): boolean {
    return this.router.isActive('/user', true);
  }

  isEditMode(): boolean {
    return this.router.isActive('/users/edit', false);
  }

  getUsers(limit: number, offset: number): void {
    this.usersService.getUsers();
  }

  deleteUser(userId: number): void {
    this.usersService.deleteUser(userId);
    console.log(userId);
  }

  getUser(): Observable<User> {
    const id: number = this.route.snapshot.params.id;
    console.log(id);
    return this.usersService.getUser(id);
    // if (this.isEditMode()) {
    // }
    // return null;
  }
}
