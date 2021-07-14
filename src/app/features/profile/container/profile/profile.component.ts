import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionQuery } from 'src/app/core/store/session.query';
import { editedPassword, EditUser, Plan, User } from 'src/app/shared/models';
import ProfileQuery from '../../store/profile.query';
import { ProfileService } from '../../store/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  currentPage = 'dashboard';
  user: Observable<User>;
  plans: Observable<Plan[]>;

  constructor(
    private sessionQuery: SessionQuery,
    private profileService: ProfileService,
    private profileQuery: ProfileQuery
  ) {
    this.plans = this.profileQuery.selectPlanArray$;
  }

  ngOnInit(): void {
    this.user = this.sessionQuery.selectUser$;
  }

  changeCurrentPage(newPage: string): void {
    this.currentPage = newPage;
  }

  editUser(user: EditUser): void {
    this.profileService.editUser(user);
  }

  changePassword(editedPassword: editedPassword): void {
    this.profileService.editPassword(editedPassword);
  }

  getActivePlans(): void {
    this.profileService.getActivePlans();
  }

  subscribeToPlan(sub: { plan: Plan; renew: boolean }): void {
    console.log(sub);
    this.profileService.subscribeToAPlan(sub);
  }
}
