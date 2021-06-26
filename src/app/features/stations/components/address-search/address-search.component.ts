import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OsmSearchResponse} from "../../../../shared/models/osmSearchResponse";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-address-search',
  templateUrl: './address-search.component.html',
  styleUrls: ['./address-search.component.scss']
})
export class AddressSearchComponent implements OnInit {

  @Input()
  addressSearchResults: OsmSearchResponse[];

  @Input()
  initialAdressValue: string

  @Output()
  searchEvent = new EventEmitter<string>()

  @Output()
  addressSelectEvent = new EventEmitter<OsmSearchResponse>();

  searchDebounce;
  inputSearchControl = new FormControl();

  constructor() {
  }

  ngOnInit(): void {
    this.inputSearchControl.patchValue(this.initialAdressValue);
  }

  search() {
    clearTimeout(this.searchDebounce);
    this.searchDebounce = setTimeout(() => this.searchEvent.emit(this.inputSearchControl.value), 500)
  }

  onSelectAdress(option: OsmSearchResponse) {
    this.inputSearchControl.patchValue(`${option.address.house_number} ${option.address.road} - ${option.address.city} (${option.address.postcode})`);
    this.addressSelectEvent.emit(option);
  }
}
