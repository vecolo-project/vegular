import { BikeMaintenanceThread, BikeModel, Ride, Station } from '.';

export type Bike = {
  id?: number;
  matriculate: string;
  station?: Station;
  batteryPercent: number;
  recharging: boolean;
  model: BikeModel;
  status: BikeStatus;
  ride?: Ride[];
  bikeMaintenanceThread?: BikeMaintenanceThread[];
  updatedAt?: Date;
  createdAt?: Date;
};

export type BikeProps = {
  id?: number;
  matriculate: string;
  station: number; // use id
  recharging: boolean;
  model: number; // use id
  status: BikeStatus;
};

export enum BikeStatus {
  OFF = 'OFF',
  MAINTAINING = 'MAINTAINING',
  IN_RIDE = 'IN_RIDE',
  RECHARGING = 'RECHARGING',
}
