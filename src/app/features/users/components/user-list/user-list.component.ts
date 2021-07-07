import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../../../shared/models';
import {FormControl} from "@angular/forms";

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
  getUsers = new EventEmitter<{ limit: number; offset: number, searchQuery: string }>();

  @Output()
  deleteUser = new EventEmitter<number>();

  @Output()
  setEditUser = new EventEmitter<number>();

  displayedColumns = [
    'id',
    'firstName',
    'lastName',
    'email',
    'role',
    'actions',
  ];

  pageIndex: number;
  pageSize: number
  searchQuery: FormControl;

  constructor() {
    this.searchQuery = new FormControl('');
  }

  ngOnInit(): void {
    this.pageIndex = 0;
    this.pageSize = 10;
    this.getUsersF();
  }

  getUsersF(): void {
    setTimeout(() => {
      this.getUsers.emit({limit: this.pageSize, offset: this.pageIndex, searchQuery: this.searchQuery.value});
    });
  }

  onSearch(): void {
    this.pageIndex = 0;
    this.getUsersF();
  }
}
