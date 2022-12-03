import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Facility} from '../model-case/facility';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {RentType} from '../model-case/rent-type';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  // tslint:disable-next-line:variable-name
  constructor(private _httpClient: HttpClient) { }

  findAll(): Observable<Facility[]> {
    return this._httpClient.get<Facility[]>(environment.URL_API_FACILITY);
  }

  search(searchForm: any): Observable<Facility[]> {
    if (!searchForm.nameSearch.length && !searchForm.rentType && !searchForm.facilityType) {
      return this._httpClient.get<Facility[]>(environment.URL_API_FACILITY);
    }
    console.log('name-search: ', searchForm.nameSearch);
    console.log('rent-type: ', searchForm.rentType);
    console.log('facility-type: ', searchForm.facilityType);
    if (!searchForm.rentType && searchForm.facilityType) {
      return this._httpClient.get<Facility[]>(environment.URL_API_FACILITY +
        '?name_like=' + searchForm.nameSearch +
        '&facilityType.id=' + searchForm.facilityType +
        '&rentType.id_like=' + searchForm.rentType);
    }
    if (searchForm.rentType && !searchForm.facilityType) {
      return this._httpClient.get<Facility[]>(environment.URL_API_FACILITY +
        '?name_like=' + searchForm.nameSearch +
        '&facilityType.id_like=' + searchForm.facilityType +
        '&rentType.id=' + searchForm.rentType);
    }
    return this._httpClient.get<Facility[]>(environment.URL_API_FACILITY +
      '?name_like=' + searchForm.nameSearch +
      '&facilityType.id=' + searchForm.facilityType +
      '&rentType.id=' + searchForm.rentType);
  }

  getAllRentType(): Observable<RentType[]> {
    return this._httpClient.get<RentType[]>(environment.URL_API_RENT_TYPE);
  }

  getAllFacilityType() {
    return this._httpClient.get<RentType[]>(environment.URL_API_FACILITY_TYPE);
  }
}
