import { Bike, User } from '.';

export type BikeMaintenanceThread = {
  id: number;
  title: string;
  content: string;
  bikeBreakdown: Bike;
  user: User;
  updatedAt: Date;
  createdAt: Date;
};
