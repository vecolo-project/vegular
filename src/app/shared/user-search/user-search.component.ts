import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../models';
import {FormControl, Validators} from '@angular/forms';
import {UsersQuery} from '../../features/users/store/users.query';
import {UsersService} from '../../features/users/store/users.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {

  userSearchResults: Observable<User[]>;

  @Input()
  inititalUserValue: User;

  @Output()
  searchEvent = new EventEmitter<string>();

  @Output()
  userSelectEvent = new EventEmitter<User>();

  searchDebounce;
  inputSearchControl = new FormControl('', Validators.required);

  constructor(private usersService: UsersService, private userQuery: UsersQuery) {
    this.userSearchResults = userQuery.selectUsersArray$;
  }

  ngOnInit(): void {
    this.inputSearchControl.patchValue(`${this.inititalUserValue.firstName} - ${this.inititalUserValue.lastName} - ${this.inititalUserValue.email}`);
  }

  search(): void {
    this.searchEvent.emit(this.inputSearchControl.value);
    clearTimeout(this.searchDebounce);
    this.searchDebounce = setTimeout(() => {
      this.usersService.getUsers(10, 0, this.inputSearchControl.value);
    }, 500);
  }

  onSelect(user: User): void {
    this.inputSearchControl.patchValue(`${user.firstName} - ${user.lastName} - ${user.email}`);
    this.userSelectEvent.emit(user);
  }

}
