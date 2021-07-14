import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {Bike} from '../models';
import {BikeService} from '../../features/bikes/store/bike/bike.service';
import {BikeQuery} from '../../features/bikes/store/bike/bike.query';

@Component({
  selector: 'app-bike-search',
  templateUrl: './bike-search.component.html',
  styleUrls: ['./bike-search.component.scss']
})
export class BikeSearchComponent implements OnInit, OnChanges {

  bikeSearchResult: Observable<Bike[]>;


  @Input()
  initialValue: Bike;

  @Output()
  searchEvent = new EventEmitter<string>();

  @Output()
  bikeSelectEvent = new EventEmitter<Bike>();

  searchDebounce;
  inputSearchControl = new FormControl('', Validators.required);


  constructor(private bikesService: BikeService, private bikeQuery: BikeQuery) {
    this.bikeSearchResult = this.bikeQuery.selectBikeArray$;
  }

  ngOnInit(): void {
    if (this.initialValue) {
      this.inputSearchControl.patchValue(`Matricule : ${this.initialValue?.matriculate} - ${this.initialValue?.model?.name} - ${this.initialValue?.model?.bikeManufacturer?.name.toUpperCase()}`);
    }
  }

  ngOnChanges(): void {
    if (this.initialValue) {
      this.inputSearchControl.patchValue(`Matricule : ${this.initialValue?.matriculate} - ${this.initialValue?.model?.name} - ${this.initialValue?.model?.bikeManufacturer?.name.toUpperCase()}`);
    }
  }

  search(): void {
    this.searchEvent.emit(this.inputSearchControl.value);
    clearTimeout(this.searchDebounce);
    this.searchDebounce = setTimeout(() => {
      this.bikesService.getBikes(10, 0, this.inputSearchControl.value);
    }, 500);
  }

  onSelectBike(bike: Bike): void {
    this.inputSearchControl.patchValue(`Matricule : ${bike.matriculate} - ${bike?.model?.name} - ${bike?.model?.bikeManufacturer?.name.toUpperCase()}`);
    this.bikeSelectEvent.emit(bike);
  }


}
