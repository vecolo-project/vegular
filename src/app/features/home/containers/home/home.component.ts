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
  scroll;

  constructor(private sessionQuery: SessionQuery) {}

  ngOnInit(): void {
    this.user = this.sessionQuery.selectUser$;
    this.scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      direction: 'horizontal',
      getDirection: true,
    });
  }

  goToContact(): void {
    const target = document.querySelector('#contact');
    this.scroll.scrollTo(target);
  }
}
