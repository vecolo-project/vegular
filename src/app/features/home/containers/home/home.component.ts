import {Component, OnInit} from '@angular/core';
import {SessionQuery} from '../../../../core/store/session.query';
import {User} from '../../../../shared/models/user.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: Observable<User>;

  constructor(private sessionQuery: SessionQuery) {
  }

  ngOnInit(): void {
    this.user = this.sessionQuery.selectUser$;
  }
}
