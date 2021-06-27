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
  editManufacturer: Observable<BikeManufacturer>;

  constructor(
    private router: Router,
    private manufacturerService: BikeManufacturerService,
    private manufacturerQuery: BikeManufacturerQuery
  ) {
    this.manufacturers = this.manufacturerQuery.selectAll();
    this.manufacturersCount = this.manufacturerQuery.selectCount$;
    this.manufacturerLoading = this.manufacturerQuery.isLoading$;
    this.editManufacturer = this.manufacturerQuery.selectEditManufacturer$;
  }

  ngOnInit(): void {}

  isRoot(): boolean {
    return this.router.isActive('bikes', true);
  }

  isAddManufacturerForm(): boolean {
    return this.router.isActive('bikes/manufacturer/add', true);
  }

  isEditManufacturerForm(): boolean {
    return this.router.isActive('bikes/manufacturer/edit', false);
  }

  getManufacturers(): void {
    this.manufacturerService.getManufacturers();
  }

  getSingleManufacturer(id: number): void {
    this.manufacturerService.getManufacturer(id);
  }

  postManufacturer(manufacturer: BikeManufacturerProps): void {
    delete manufacturer.id;
    this.manufacturerService.postManufacturer(manufacturer);
  }

  putManufacturer(manufacturer: BikeManufacturerProps): void {
    const id = manufacturer.id;
    delete manufacturer.id;
    this.manufacturerService.putManufacturer(manufacturer, id);
  }

  deleteManufacturer(id: number): void {
    this.manufacturerService.deleteManufacturer(id);
  }

  setEditManufacturer(id: number): void {
    this.manufacturerQuery.setEditManufacturer(id);
  }
}
