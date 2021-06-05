import {Component, OnInit} from '@angular/core';
import {RouterNavigation, routesPath} from '../../router/router.navigation';
import {SessionQuery} from '../../state/session.query';
import {SessionService} from '../../state/session.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  title = 'Vecolo';
  isMobileMenuShow = false;
  routesPath;

  constructor(public routerNavigation: RouterNavigation,
              private router: Router,
              public sessionQuery: SessionQuery,
              public sessionService: SessionService) {
    this.routesPath = routesPath;
  }

  ngOnInit(): void {
  }

  toggleMobileMenu(): void {
    this.isMobileMenuShow = !this.isMobileMenuShow;
  }

  isActive(path: string): string {
    if (this.router.url.includes(path)) {
      return 'bg-blue-500';
    }
    return '';
  }
}
