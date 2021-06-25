import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HashMap } from '@datorama/akita';
import { User, UserOut } from '../../../../shared/models/user.model';
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
  users: Observable<User[]>;
  userCount: Observable<number>;
  editUser: Observable<User>;
  usersLoading: Observable<boolean>;

  constructor(
    public usersQuery: UsersQuery,
    private usersService: UsersService,
    public sessionQuery: SessionQuery,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.users = this.usersQuery.selectAll();
    this.userCount = this.usersQuery.selectCount$;
    this.usersLoading = this.usersQuery.isLoading$;
    this.editUser = this.usersQuery.selectEditUsers$;
  }

  ngOnInit(): void {}

  isListMode(): boolean {
    return this.router.isActive('/users', true);
  }

  isEditMode(): boolean {
    return this.router.isActive('/users/edit', false);
  }

  isAddMode(): boolean {
    return this.router.isActive('/users/add', true);
  }

  getUsers(limit: number, offset: number): void {
    this.usersService.getUsers(limit, offset);
  }

  deleteUser(userId: number): void {
    this.usersService.deleteUser(userId);
    console.log(userId); // TODO remove this and check for real delete
  }

  setEditUser(id: number): void {
    this.usersQuery.setEditUser(id);
  }

  retrieveEditUser(): void {
    const id = Number(this.route.snapshot.params.id);
    this.usersService.retrieveEditUser(id);
  }

  saveUser(user: UserOut): void {
    if (user.password.length === 0) {
      delete user.password;
    }
    console.log(user.id);
    if (user.id === null) {
      this.usersService.postUser(user);
    } else {
      this.usersService.putUser(user);
    }
  }
}
