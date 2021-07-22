import { Invoice, Plan, User } from './index';

export type Subscription = {
  id?: number;
  startDate: Date;
  monthDuration: number;
  autoRenew: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  plan: Plan;
  user: User;
  invoices?: Invoice[];
};
