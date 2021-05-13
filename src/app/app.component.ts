import {Component, OnInit} from '@angular/core';
import {SessionQuery} from './session/state/session.query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Vecolo back office App';


  constructor(private sessionQuery: SessionQuery) {
  }

  ngOnInit(): void {
  }
}
