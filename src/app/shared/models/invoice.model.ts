import {Subscription, User} from "./index";

export type Invoice = {
  id: number;
  billingDate: Date;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
  user: User;
  subscription: Subscription;
}
