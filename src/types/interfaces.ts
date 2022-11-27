export type FixMeLater = any;

export interface ICredential {
  token?: string;
  username?: string;
}

export interface ISetItem {
  key: string;
  value: string | null;
}

export interface TripDetails {
  endStation: string;
  key: number;
  seatsLeft: number;
  selectedBus: string;
  startDate: string;
  startStation: string;
  tripId: string;
}

export interface BookedPassenger {
  seat: string;
  passenger: string;
  key: number;
}
