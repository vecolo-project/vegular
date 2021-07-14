import {Component, OnInit} from '@angular/core';
import {RouterNavigation, routesPath} from '../../../router/router.navigation';
import {Router} from '@angular/router';
import {SessionQuery} from '../../../store/session.query';
import {SessionService} from '../../../store/session.service';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
})
export class MobileMenuComponent implements OnInit {
  title = 'Vecolo';
  isMobileMenuShow = false;
  routesPath;

  constructor(public routerNavigation: RouterNavigation,
              private router: Router,
              public sessionQuery: SessionQuery,
              public sessionService: SessionService) {
    this.routesPath = routesPath;
  }

  ngOnInit(): void {}

  isActive(path: string): string {
    if (this.router.url.includes(path)) {
      return 'bg-blue-500';
    }
    return '';
  }
}
