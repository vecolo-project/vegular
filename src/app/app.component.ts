import {Component, OnInit} from '@angular/core';
import {SessionQuery} from './core/store/session.query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Vecolo';


  constructor(private sessionQuery: SessionQuery) {
  }

  ngOnInit(): void {
  }
}
