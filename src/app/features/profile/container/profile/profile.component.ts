import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionQuery } from 'src/app/core/store/session.query';
import { EditUser, User } from 'src/app/shared/models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(private sessionQuery: SessionQuery) {}
  currentPage = 'dashboard';
  user: Observable<User>;
  ngOnInit(): void {
    this.user = this.sessionQuery.selectUser$;
  }

  changeCurrentPage(newPage: string): void {
    this.currentPage = newPage;
  }

  editUser(user: EditUser): void {}
}
