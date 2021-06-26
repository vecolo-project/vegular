import {Bike, BikeManufacturer} from ".";

export type BikeModel = {
  id: number;
  name: string;
  batteryCapacity: number;
  weight: number;
  maxPower: number;
  maxSpeed: number;
  maxDistance: number;
  description: string;
  image: string;
  icon: string;
  bikes: Bike[];
  bikeManufacturer: BikeManufacturer;
  createdAt: Date;
  updatedAt: Date;
}
