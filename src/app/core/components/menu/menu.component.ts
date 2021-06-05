import {Component, OnInit} from '@angular/core';
import {RouterNavigation} from '../../router/router.navigation';
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

  constructor(public routerNavigation: RouterNavigation, public sessionQuery: SessionQuery, public sessionService: SessionService) {
  }

  ngOnInit(): void {
  }

  toggleMobileMenu(): void {
    this.isMobileMenuShow = !this.isMobileMenuShow;
  }
}
