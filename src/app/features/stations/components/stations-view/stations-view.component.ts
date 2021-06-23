import {Component, Input, OnInit} from '@angular/core';
import {Station} from "../../../../shared/models";

@Component({
  selector: 'app-stations-view',
  templateUrl: './stations-view.component.html',
  styleUrls: ['./stations-view.component.scss']
})
export class StationsViewComponent implements OnInit {

  @Input()
  station: Station

  constructor() {
  }

  ngOnInit(): void {
  }

}
