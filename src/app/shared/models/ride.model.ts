import {Bike, Station, User} from '.';

export type Ride = {
  id?: number;
  duration?: number;
  startStation: Station;
  endStation?: Station;
  user: User;
  bike: Bike;
  rideLength?: number;
  invoiceAmount?: number;
  updatedAt?: Date;
  createdAt?: Date;
};
