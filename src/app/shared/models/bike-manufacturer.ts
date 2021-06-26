import { BikeModel } from '.';

export type BikeManufacturer = {
  id: number;
  name: string;
  phone: string;
  address: string;
  bikeModel: BikeModel[];
};

export type BikeManufacturerProps = {
  name: string;
  phone: string;
  address: string;
};
