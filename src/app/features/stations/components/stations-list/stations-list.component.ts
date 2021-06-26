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

  searchDebounce;
  inputSearchControl = new FormControl();

  constructor() {
  }

  ngOnInit(): void {
  }

  search() {
    clearTimeout(this.searchDebounce);
    this.searchDebounce = setTimeout(() => this.searchEvent.emit(this.inputSearchControl.value), 500)
  }

  onSelectAdress(option: OsmSearchResponse) {
    this.inputSearchControl.patchValue(`${option.address.house_number} ${option.address.road} - ${option.address.city} (${option.address.postcode})`)
  }
}
