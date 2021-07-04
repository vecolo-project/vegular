import {Subscription} from "./index";

export type Plan = {
  id?: number;
  name: string;
  price: number;
  costPerMinute: number;
  isUnlimited: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  subscriptions?: Subscription[];
}
