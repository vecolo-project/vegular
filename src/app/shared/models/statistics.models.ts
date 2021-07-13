export type SubscriptionStatistics = {
  planId: number,
  planName: string,
  total: number
};

export type IncomeStatistics = {
  totalSubscription: number;
  totalRide: number;
};

export type RidesStatistics = {
  totalRide: number;
  day: number;
  totalLength: number;
};

export type StationsStatistics = {
  total: number;
  power: number;
};

export type BikesStatistics = {
  status: string;
  total: number;
};
