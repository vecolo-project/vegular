import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {StationsQuery} from 'src/app/features/stations/store/stations.query';
import {StationsService} from 'src/app/features/stations/store/stations.service';
import {Bike, BikeManufacturer, BikeManufacturerProps, BikeModel, BikeModelProps, BikeProps, Station,} from 'src/app/shared/models';
import {BikeQuery} from '../../store/bike/bike.query';
import {BikeService} from '../../store/bike/bike.service';
import {BikeManufacturerQuery} from '../../store/manufacturer/manufacturer.query';
import {BikeManufacturerService} from '../../store/manufacturer/manufacturer.service';
import {BikeModelQuery} from '../../store/model/model.query';
import {BikeModelService} from '../../store/model/model.service';

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

  bikes: Observable<Bike[]>;
  bikesCount: Observable<number>;
  bikeLoading: Observable<boolean>;
  editBike: Observable<Bike>;

  stations: Observable<Station[]>;

  constructor(
    private router: Router,
    private manufacturerService: BikeManufacturerService,
    private manufacturerQuery: BikeManufacturerQuery,
    private bikeModelService: BikeModelService,
    private bikeModelQuery: BikeModelQuery,
    private bikeService: BikeService,
    private bikeQuery: BikeQuery,
    private stationsQuery: StationsQuery,
    private stationsService: StationsService
  ) {
    this.manufacturers = this.manufacturerQuery.selectAll();
    this.manufacturersCount = this.manufacturerQuery.selectCount$;
    this.manufacturerLoading = this.manufacturerQuery.isLoading$;
    this.editManufacturer = this.manufacturerQuery.selectEditManufacturer$;

    this.models = this.bikeModelQuery.selectAll();
    this.modelsCount = this.bikeModelQuery.selectCount$;
    this.modelLoading = this.bikeModelQuery.isLoading$;
    this.editModel = this.bikeModelQuery.selectEditModel$;

    this.bikes = this.bikeQuery.selectAll();
    this.bikesCount = this.bikeQuery.selectCount$;
    this.bikeLoading = this.bikeQuery.isLoading$;
    this.editBike = this.bikeQuery.selectEditBike$;

    this.stations = this.stationsQuery.selectAll();
  }

  ngOnInit(): void {
  }

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

  postModel(model: BikeModelProps): void {
    delete model.id;
    this.bikeModelService.postModel(model);
  }

  putModel(model: BikeModelProps): void {
    const id = model.id;
    delete model.id;
    this.bikeModelService.putModel(model, id);
  }

  uploadModelImage(formData: FormData, id: number): void {
    this.bikeModelService.uploadImage(formData, id);
  }

  deleteModel(id: number): void {
    this.bikeModelService.deleteModel(id);
  }

  setEditModel(id: number): void {
    this.bikeModelQuery.setEditModel(id);
  }

  getStations(): void {
    this.stationsService.getStations(10000, 0);
  }

  getBikes(limit: number, offset: number, searchQuery?: string): void {
    this.bikeService.getBikes(limit, offset, searchQuery);
  }

  getBike(id: number): void {
    this.bikeService.getBike(id);
  }

  postBike(bike: BikeProps): void {
    const bikeWithBatteryPercent = {...bike, batteryPercent: 100};
    this.bikeService.postBike(bikeWithBatteryPercent);
  }

  putBike(bike: BikeProps): void {
    this.bikeService.putBike(bike, bike.id);
  }

  deleteBike(id: number): void {
    this.bikeService.deleteBike(id);
  }
}
