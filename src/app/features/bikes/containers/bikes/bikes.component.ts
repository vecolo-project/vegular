import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BikeManufacturer, BikeManufacturerProps } from 'src/app/shared/models';
import { BikeManufacturerQuery } from '../../store/manufacturer/manufacturer.query';
import { BikeManufacturerService } from '../../store/manufacturer/manufacturer.service';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.scss'],
})
export class BikesComponent implements OnInit {
  manufacturers: Observable<BikeManufacturer[]>;
  manufacturersCount: Observable<number>;
  manufacturerLoading: Observable<boolean>;
  constructor(
    private router: Router,
    private manufacturerService: BikeManufacturerService,
    private manufacturerQuery: BikeManufacturerQuery
  ) {
    this.manufacturers = this.manufacturerQuery.selectAll();
    this.manufacturersCount = this.manufacturerQuery.selectCount$;
    this.manufacturerLoading = this.manufacturerQuery.isLoading$;
  }

  ngOnInit(): void {}

  isRoot(): boolean {
    return this.router.isActive('bikes', true);
  }

  isAddManufacturerForm(): boolean {
    return this.router.isActive('bikes/manufacturer/add', true);
  }

  getManufacturers(): void {
    this.manufacturerService.getManufacturers();
  }

  postManufacturer(manufacturer: BikeManufacturerProps): void {
    this.manufacturerService.postManufacturer(manufacturer);
  }
}
