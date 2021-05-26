import { Component, OnInit } from '@angular/core';
import { SessionQuery } from '../../../../core/state/session.query';
import { SessionService } from '../../../../core/state/session.service';
import { User } from '../../../../core/models/user.model';
import { Observable } from 'rxjs';
import { Request } from '../../../../core/utils/request';

@Component({
  selector: 'app-profile',
  templateUrl: './profile-dashboard.component.html',
  styleUrls: ['./profile-dashboard.component.scss'],
})
export class ProfileDashboardComponent implements OnInit {
  user: Observable<User>;

  constructor(
    private sessionQuery: SessionQuery,
    private sessionService: SessionService
  ) {
    this.user = sessionQuery.selectUser$;
  }

  async ngOnInit(): Promise<void> {
    const users = await new Request('/user').call();
    console.log(users);
  }

  logout(): void {
    this.sessionService.logout();
  }
}
