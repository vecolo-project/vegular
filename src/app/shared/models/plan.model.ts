import { Subscription } from './index';

export type Plan = {
  id?: number;
  name: string;
  price: number;
  costPerMinute: number;
  freeMinutes: number;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  subscriptions?: Subscription[];
};
