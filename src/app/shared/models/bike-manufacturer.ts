import {BikeModel} from ".";

export type BikeManufacturer = {
  id: number;
  name: string;
  phone: string;
  address: string;
  bikeModel: BikeModel[];
}
