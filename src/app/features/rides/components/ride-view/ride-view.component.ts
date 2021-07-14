import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Bike, Ride, Station, User} from '../../../../shared/models';
import {AnimationOptions} from 'ngx-lottie';
import {RouterNavigation} from '../../../../core/router/router.navigation';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent} from '../../../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-ride-view',
  templateUrl: './ride-view.component.html',
  styleUrls: ['./ride-view.component.scss']
})
export class RideViewComponent implements OnInit {

  @Input()
  ride: Ride;

  @Output()
  updateRide = new EventEmitter<Ride>();

  @Output()
  deleteRide = new EventEmitter<number>();

  lottieBikeOptions: AnimationOptions = {
    path: 'assets/lottie/bike_4.json',
  };

  editMode: boolean;
  rideForm: FormGroup;


  constructor(@Inject(FormBuilder) fb, private routerNavigation: RouterNavigation, private dialog: MatDialog) {
    this.rideForm = fb.group({
      DATE: [new Date(), [Validators.required]],
      DURATION: [0, [Validators.required, Validators.min(1)]],
      LENGTH: [0, [Validators.required, Validators.min(1)]],
      INVOICE_AMOUNT: [0, [Validators.required, Validators.min(0)]],
      USER: ['', Validators.required],
      BIKE: ['', Validators.required],
      START_STATION: ['', Validators.required],
      END_STATION: ['', Validators.required]
    });
  }

  onViewBike(bike: Bike): void {
    this.routerNavigation.gotoBikeView(bike.id);
  }

  onViewStation(station: Station): void {
    this.routerNavigation.gotoStationView(station.id);
  }

  onViewUser(user: User): void {
    this.routerNavigation.gotoUserView(user.id);
  }

  onEdit(): void {
    this.rideForm.controls.DATE.patchValue(this.ride?.createdAt);
    this.rideForm.controls.DURATION.patchValue(this.ride?.duration);
    this.rideForm.controls.LENGTH.patchValue(this.ride?.rideLength);
    this.rideForm.controls.INVOICE_AMOUNT.patchValue(this.ride?.invoiceAmount);
    this.onBikeSelect(this.ride?.bike);
    this.onUserSelect(this.ride?.user);
    this.onStartStationSelect(this.ride?.startStation);
    this.onEndStationSelect(this.ride?.endStation);
    this.editMode = true;
  }

  onDelete(): void {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Suppression d\'un trajet',
        message: 'Êtes vous sûr de vouloir supprimer ce trajet ?'
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.deleteRide.emit(this.ride?.id);
      }
    });
  }

  ngOnInit(): void {
    this.editMode = false;
  }

  onSubmit(): void {
    const ride: Ride = {
      id: this.ride?.id,
      user: this.rideForm.value.USER,
      bike: this.rideForm.value.BIKE,
      duration: this.rideForm.value.DURATION,
      rideLength: this.rideForm.value.LENGTH,
      invoiceAmount: this.rideForm.value.INVOICE_AMOUNT,
      startStation: this.rideForm.value.START_STATION,
      endStation: this.rideForm.value.END_STATION,
      createdAt: this.rideForm.value.DATE
    };
    this.updateRide.emit(ride);
    this.editMode = false;
  }

  onBikeSearch(): void {
    this.rideForm.controls.BIKE.patchValue(null);
  }

  onUserSearch(): void {
    this.rideForm.controls.USER.patchValue(null);
  }

  onStartStationSearch(): void {
    this.rideForm.controls.START_STATION.patchValue(null);
  }

  onEndStationSearch(): void {
    this.rideForm.controls.END_STATION.patchValue(null);
  }

  onBikeSelect(bike: Bike): void {
    this.rideForm.controls.BIKE.patchValue(bike);
  }

  onUserSelect(user: User): void {
    this.rideForm.controls.USER.patchValue(user);
  }

  onStartStationSelect(station: Station): void {
    this.rideForm.controls.START_STATION.patchValue(station);
  }

  onEndStationSelect(station: Station): void {
    this.rideForm.controls.END_STATION.patchValue(station);
  }
}
