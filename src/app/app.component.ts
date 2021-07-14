import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionQuery } from './core/store/session.query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Vecolo';

  constructor(private sessionQuery: SessionQuery, private router: Router) {}

  ngOnInit(): void {}

  getClass(): string {
    if (!this.router.isActive('/home', false)) {
      return 'container mx-auto px-2';
    }
  }
}
