import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OsmSearchResponse} from "../../../../shared/models/osmSearchResponse";
import {FormControl, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {StationsService} from "../../store/stations.service";
import {StationsQuery} from "../../store/stations.query";

@Component({
  selector: 'app-address-search',
  templateUrl: './address-search.component.html',
  styleUrls: ['./address-search.component.scss']
})
export class AddressSearchComponent implements OnInit {

  addressSearchResults: Observable<OsmSearchResponse[]>;

  @Input()
  initialAdressValue: string

  @Output()
  searchEvent = new EventEmitter<string>()

  @Output()
  addressSelectEvent = new EventEmitter<OsmSearchResponse>();

  searchDebounce;
  inputSearchControl = new FormControl('', Validators.required);

  constructor(private stationsService: StationsService, private stationsQuery: StationsQuery) {
    this.addressSearchResults = stationsQuery.selectAdressSearchResult$;
  }

  ngOnInit(): void {
    this.inputSearchControl.patchValue(this.initialAdressValue);
  }

  search() {
    this.searchEvent.emit(this.inputSearchControl.value);
    clearTimeout(this.searchDebounce);
    this.searchDebounce = setTimeout(() => {
      this.stationsService.searchAddress(this.inputSearchControl.value);
    }, 500);
  }

  onSelectAdress(option: OsmSearchResponse) {
    this.inputSearchControl.patchValue(`${option.address.house_number || 0} ${option.address.road} - ${option.address.city || option.address.town} (${option.address.postcode})`);
    this.addressSelectEvent.emit(option);
  }
}
