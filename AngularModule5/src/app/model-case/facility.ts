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
  facilityType: {
    id: number;
    name: string;
  };
  rentType: {
    id: number;
    name: string;
  };
}
