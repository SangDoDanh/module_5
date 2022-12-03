import {FacilityType} from './facility-type';
import {RentType} from './rent-type';

export interface Facility {
  id?: number;
  name?: string;
  area?: number;
  floors?: number;
  maxPeople?: number;
  cost?: number;
  status?: boolean;
  standRoom?: string;
  description: string;
  poolArea: number;
  freeService: string;
  facilityType: FacilityType;
  rentType: RentType;
}
