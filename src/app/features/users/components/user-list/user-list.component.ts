import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

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
  public users = [{ firstName: 'John', lastName: 'gg', role: 'CLIENT' }];
  public dataSource: MatTableDataSource<userListItem>;
  constructor() {
    this.dataSource = new MatTableDataSource(this.users);
  }

  ngOnInit(): void {}
}
