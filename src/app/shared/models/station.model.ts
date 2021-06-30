import {Bike, Ride, StationMaintenanceThread, StationMonitoring} from ".";

export type Station = {
  id?: number
  batteryCapacity: number,
  bikeCapacity: number,
  streetNumber: number,
  streetName: string,
  city: string,
  zipcode: string,
  coordinateX: number,
  coordinateY: number,
  stationMonitoring?: StationMonitoring[],
  startRide?: Ride[],
  endRide?: Ride[],
  stationMaintenanceThread?: StationMaintenanceThread[],
  bike?: Bike[],
  createdAt?: Date,
  updatedAt?: Date,
};
