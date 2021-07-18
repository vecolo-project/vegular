import { Component, OnInit } from '@angular/core';
import { SessionQuery } from '../../../../core/store/session.query';
import { User } from '../../../../shared/models/user.model';
import { Observable } from 'rxjs';
import { Plan } from 'src/app/shared/models';
import { ProfileService } from 'src/app/features/profile/store/profile.service';
import ProfileQuery from 'src/app/features/profile/store/profile.query';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user: Observable<User>;
  main: HTMLElement;
  planList: Observable<Plan[]>;

  constructor(
    private sessionQuery: SessionQuery,
    private profileService: ProfileService,
    private profileQuery: ProfileQuery
  ) {
    this.planList = this.profileQuery.selectActivePlans$;
    this.user = this.sessionQuery.selectUser$;
  }

  ngOnInit(): void {
    this.profileService.getActivePlans();
  }

  goToPresentation(): void {
    const target = document.querySelector('#presentation');
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  goToActu(): void {
    const target = document.querySelector('#actu');
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  goToTarif(): void {
    const target = document.querySelector('#tarif');
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  goToContact(): void {
    const target = document.querySelector('#contact');
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
