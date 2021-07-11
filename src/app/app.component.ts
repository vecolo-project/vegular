import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionQuery } from './core/store/session.query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Vecolo back office App';

  constructor(private sessionQuery: SessionQuery, private router: Router) {}

  ngOnInit(): void {}

  isNotHomePage(): string {
    if (!this.router.isActive('/home', false)) {
      return 'container mx-auto px-2';
    }
  }
}
