import { Component, OnInit } from '@angular/core';
import { SessionQuery } from '../../../../core/store/session.query';
import { User } from '../../../../shared/models/user.model';
import { Observable } from 'rxjs';
import LocomotiveScroll from 'locomotive-scroll';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user: Observable<User>;
  main: HTMLElement;

  constructor(private sessionQuery: SessionQuery) {}

  ngOnInit(): void {
    this.user = this.sessionQuery.selectUser$;
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
