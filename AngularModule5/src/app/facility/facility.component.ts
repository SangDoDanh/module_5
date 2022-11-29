import { Component, OnInit } from '@angular/core';
import {faBath, faPlaneDeparture, faCar, faBed} from '@fortawesome/free-solid-svg-icons';
import {FacilityService} from '../case-service/facility.service';
import {Facility} from '../model-case/facility';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';
import {RentType} from '../model-case/rent-type';
import {FacilityType} from '../model-case/facility-type';


@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  p: number;
  facilityList: Facility[];
  renTypes: RentType[];
  facilityTypes: FacilityType[];
  searchForm: FormGroup;
  // start icon
  faBath = faBath;
  faPlaneDeparture = faPlaneDeparture;
  faCar = faCar;
  faBed = faBed;
  // end icon
  // tslint:disable-next-line:variable-name
  constructor(private _facilityService: FacilityService, private _formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this._facilityService.findAll().subscribe(data => {
      this.facilityList = data;
    });
    this._facilityService.getAllRentType().subscribe(data => {
      this.renTypes = data;
    });
    this._facilityService.getAllFacilityType().subscribe(data => {
      this.facilityTypes = data;
    });
    this.searchForm = this._formBuilder.group({
      nameSearch: [''],
      rentType: [''],
      facilityType: [''],
    });
  }
  search() {
    this._facilityService.search(this.searchForm.value).subscribe(data => {
      this.facilityList = data;
    });
  }
}
