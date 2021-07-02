import {BikeModel} from '.';

export type BikeManufacturer = {
  id: number;
  name: string;
  phone: string;
  address: string;
  bikeModel: BikeModel[];
};

export type BikeManufacturerProps = {
  id: number | null;
  name: string;
  phone: string;
  address: string;
};
