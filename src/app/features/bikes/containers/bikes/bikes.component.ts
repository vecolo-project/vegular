import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {
  BikeManufacturer,
  BikeManufacturerProps,
  BikeModel,
} from 'src/app/shared/models';
import { BikeManufacturerQuery } from '../../store/manufacturer/manufacturer.query';
import { BikeManufacturerService } from '../../store/manufacturer/manufacturer.service';
import { BikeModelQuery } from '../../store/model/model.query';
import { BikeModelService } from '../../store/model/model.service';

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

  models: Observable<BikeModel[]>;
  modelsCount: Observable<number>;
  modelLoading: Observable<boolean>;
  editModel: Observable<BikeModel>;

  constructor(
    private router: Router,
    private manufacturerService: BikeManufacturerService,
    private manufacturerQuery: BikeManufacturerQuery,
    private bikeModelService: BikeModelService,
    private bikeModelQuery: BikeModelQuery
  ) {
    this.manufacturers = this.manufacturerQuery.selectAll();
    this.manufacturersCount = this.manufacturerQuery.selectCount$;
    this.manufacturerLoading = this.manufacturerQuery.isLoading$;
    this.editManufacturer = this.manufacturerQuery.selectEditManufacturer$;

    this.models = this.bikeModelQuery.selectAll();
    this.modelsCount = this.bikeModelQuery.selectCount$;
    this.modelLoading = this.bikeModelQuery.isLoading$;
    this.editModel = this.bikeModelQuery.selectEditModel$;
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

  isAddModelForm(): boolean {
    return this.router.isActive('bikes/model/add', true);
  }

  isEditModelForm(): boolean {
    return this.router.isActive('bikes/model/edit', false);
  }

  isAddBikeForm(): boolean {
    return this.router.isActive('bikes/add', true);
  }

  isEditBikeForm(): boolean {
    return this.router.isActive('bikes/edit', false);
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

  getModels(): void {
    this.bikeModelService.getModels();
  }

  getSingleModel(id: number): void {
    this.bikeModelService.getModel(id);
  }

  postModel(model: BikeModel): void {
    delete model.id;
    this.bikeModelService.postModel(model);
  }

  putModel(model: BikeModel): void {
    const id = model.id;
    delete model.id;
    this.bikeModelService.putModel(model, id);
  }

  uploadModelImage(formData: FormData): void {
    this.bikeModelService.uploadImage(formData);
  }
}
