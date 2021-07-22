import { Station } from '.';

export type StationMonitoring = {
  id: number;
  isActive: boolean;
  status: StationMonitoringStatus;
  batteryPercent: number;
  chargingPower: number;
  usedBikeSlot: number;
  station: Station;
  createdAt: Date;
};

export enum StationMonitoringStatus {
  ACTIVE = 'ACTIVE',
  MAINTAINING = 'MAINTAINING',
  OFF = 'OFF',
}
