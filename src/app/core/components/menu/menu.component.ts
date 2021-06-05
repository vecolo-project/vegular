import {Component, OnInit} from '@angular/core';
import {RouterNavigation, routesPath} from '../../router/router.navigation';
import {SessionQuery} from '../../state/session.query';
import {SessionService} from '../../state/session.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  title = 'Vecolo';
  isMobileMenuShow = false;
  routesPath;

  constructor(public routerNavigation: RouterNavigation, public sessionQuery: SessionQuery, public sessionService: SessionService) {
    this.routesPath = routesPath;
  }

  ngOnInit(): void {
  }

  toggleMobileMenu(): void {
    this.isMobileMenuShow = !this.isMobileMenuShow;
  }
}
