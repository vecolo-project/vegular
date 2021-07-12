import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Invoice, Ride, Subscription, User, UserFormData} from '../../../../shared/models';
import {UsersQuery} from '../../store/users.query';
import {UsersService} from '../../store/users.service';
import {SessionQuery} from '../../../../core/store/session.query';
import {ActivatedRoute, Router} from '@angular/router';
import {buildPostUserFromUserFormData, buildPutUserFromUserFormData} from '../../userTypeAdapter';
import {RouterNavigation} from '../../../../core/router/router.navigation';

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
  viewUserRides: Observable<Ride[]>;
  viewUserSubscriptions: Observable<Subscription[]>;
  viewUserInvoices: Observable<Invoice[]>;
  viewUserRidesCount: Observable<number>;
  viewUserSubscriptionsCount: Observable<number>;
  viewUserInvoicesCount: Observable<number>;


  constructor(
    public usersQuery: UsersQuery,
    private usersService: UsersService,
    public sessionQuery: SessionQuery,
    private router: Router,
    private route: ActivatedRoute,
    private routerNavigation: RouterNavigation
  ) {
    this.users = this.usersQuery.selectAll();
    this.userCount = this.usersQuery.selectCount$;
    this.usersLoading = this.usersQuery.isLoading$;
    this.editUser = this.usersQuery.selectEditUsers$;

    this.viewUserRides = this.usersQuery.selectViewUserRides$;
    this.viewUserSubscriptions = this.usersQuery.selectViewUserSubscriptions$;
    this.viewUserInvoices = this.usersQuery.selectViewUserInvoices$;
    this.viewUserRidesCount = this.usersQuery.selectViewUserRidesCount$;
    this.viewUserSubscriptionsCount = this.usersQuery.selectViewUserSubscriptionsCount$;
    this.viewUserInvoicesCount = this.usersQuery.selectViewUserInvoicesCount$;
  }

  ngOnInit(): void {
    if (this.isViewMode()) {
      const userId = Number.parseInt(this.route.snapshot.params.id, 10);
      this.usersService.retrieveEditUser(userId);
    }
  }

  isListMode(): boolean {
    return this.router.isActive('/users', true);
  }

  isEditMode(): boolean {
    return this.router.isActive('/users/edit', false);
  }

  isViewMode(): boolean {
    return this.router.isActive('/users/view', false);
  }

  isAddMode(): boolean {
    return this.router.isActive('/users/add', true);
  }

  getUsers(limit: number, offset: number, searchQuery: string): void {
    this.usersService.getUsers(limit, offset, searchQuery);
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

  postUser(user: UserFormData): void {
    const postUser = buildPostUserFromUserFormData(user);
    this.usersService.postUser(postUser);
  }

  onViewUser(userId: number): void {
    this.usersQuery.setEditUser(userId);
    this.routerNavigation.gotoUserView(userId);
  }
}
