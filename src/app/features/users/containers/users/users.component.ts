import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {User, UserFormData} from '../../../../shared/models/user.model';
import {UsersQuery} from '../../store/users.query';
import {UsersService} from '../../store/users.service';
import {SessionQuery} from '../../../../core/store/session.query';
import {ActivatedRoute, Router} from '@angular/router';
import {buildPostUserFromUserFormData, buildPutUserFromUserFormData,} from '../../userTypeAdapter';

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
  }

  setEditUser(id: number): void {
    this.usersQuery.setEditUser(id);
  }

  retrieveEditUser(): void {
    const id = Number(this.route.snapshot.params.id);
    this.usersService.retrieveEditUser(id);
  }

  putUser(user: UserFormData): void {
    const id = user.id;
    const putUser = buildPutUserFromUserFormData(user);
    this.usersService.putUser(putUser, id);
  }

  postUser(user: UserFormData) {
    const postUser = buildPostUserFromUserFormData(user);
    this.usersService.postUser(postUser);
  }
}
