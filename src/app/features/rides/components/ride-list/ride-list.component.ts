import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Ride} from '../../../../shared/models';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-ride-list',
  templateUrl: './ride-list.component.html',
  styleUrls: ['./ride-list.component.scss']
})
export class RideListComponent implements OnInit {

  @Input()
  rideList: Ride[];

  @Input()
  rideCount: number;

  @Output()
  getRides = new EventEmitter<{ limit: number, offset: number, searchQuery?: string }>();

  @Output()
  viewRide = new EventEmitter<number>();

  displayedColumns = [
    'date',
    'start',
    'end',
    'duration-length',
    'invoice',
    'matricule',
    'user'
  ];

  pageIndex: number;
  pageSize: number;
  searchQuery: FormControl = new FormControl('');

  ngOnInit(): void {
    this.getRideF(0, 10);
  }

  onViewRide(ride: Ride): void {
    this.viewRide.emit(ride.id);
  }

  onSearch(): void {
    this.pageIndex = 0;
    this.getRideF(this.pageIndex, this.pageSize);
  }

  getRideF(pageIndex: number, pageSize: number): void {
    this.pageIndex = pageIndex;
    this.pageSize = pageSize;
    setTimeout(() => {
      this.getRides.emit({limit: this.pageSize, offset: this.pageIndex * this.pageSize, searchQuery: this.searchQuery.value});
    });
  }
}
