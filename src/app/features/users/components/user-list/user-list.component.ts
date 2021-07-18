import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../../../shared/models';
import {FormControl} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent} from '../../../../shared/confirm-dialog/confirm-dialog.component';

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

  @Output()
  viewUser = new EventEmitter<number>();

  displayedColumns = [
    'id',
    'firstName',
    'lastName',
    'email',
    'role',
    'actions',
  ];

  pageIndex: number;
  pageSize: number;
  searchQuery: FormControl;

  constructor(private dialog: MatDialog) {
    this.searchQuery = new FormControl('');
  }

  ngOnInit(): void {
    this.getUsersF(0, 10);
  }

  getUsersF(pageIndex: number, pageSize: number): void {
    this.pageIndex = pageIndex;
    this.pageSize = pageSize;
    setTimeout(() => {
      this.getUsers.emit({limit: this.pageSize, offset: this.pageIndex * this.pageSize, searchQuery: this.searchQuery.value});
    });
  }

  onSearch(): void {
    this.pageIndex = 0;
    this.getUsersF(this.pageIndex, this.pageSize);
  }

  onDelete(id: number): void {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Suppression d\'un Utilisateur',
        message: 'Êtes vous sûr de vouloir supprimer cet utilisateur ?'
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.deleteUser.emit(id);
      }
    });
  }

  onViewUser(user: User): void {
    this.viewUser.emit(user.id);
  }

}
