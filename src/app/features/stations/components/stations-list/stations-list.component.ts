import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OsmSearchResponse} from "../../../../shared/models/osmSearchResponse";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-stations-list',
  templateUrl: './stations-list.component.html',
  styleUrls: ['./stations-list.component.scss']
})
export class StationsListComponent implements OnInit {
  @Input()
  addressSearchResults: OsmSearchResponse[];

  @Output()
  searchEvent = new EventEmitter<string>()

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelect(value: any) {
    console.log(value);
  }
}
