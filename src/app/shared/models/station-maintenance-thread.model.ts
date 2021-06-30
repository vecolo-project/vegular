import {Station, User} from ".";

export type StationMaintenanceThread = {
  id: number;
  title: string;
  content: string;
  stationBreakdown: Station;
  user: User;
  updatedAt: Date;
  createdAt: Date;
};
