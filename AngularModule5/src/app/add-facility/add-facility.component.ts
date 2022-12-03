import { Component, OnInit } from '@angular/core';
import {FacilityType} from '../model-case/facility-type';
import {RentType} from '../model-case/rent-type';
import {FacilityService} from '../case-service/facility.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import * as $ from 'jquery';

// @ts-ignore
@Component({
  selector: 'app-add-facility',
  templateUrl: './add-facility.component.html',
  styleUrls: ['./add-facility.component.css']
})
export class AddFacilityComponent implements OnInit {
  facilityTypes: FacilityType[];
  renTypes: RentType[];
  rfFacility: FormGroup;
  // tslint:disable-next-line:variable-name
  constructor(private _facilityService: FacilityService, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this._facilityService.getAllRentType().subscribe(data => {
      this.renTypes = data;
    });
    this._facilityService.getAllFacilityType().subscribe(data => {
      this.facilityTypes = data;
      this.autoFacilityType();
    });
    this.rfFacility = this._formBuilder.group({
      name: [],
      area: [],
      floors: [],
      maxPeople: [],
      cost: [],
      status: [],
      standRoom: [],
      description: [],
      poolArea: [],
      freeService: [],
      facilityType: [1],
      rentType: [1]
    });
  }

  autoFacilityType(): void {
    // tslint:disable-next-line:only-arrow-functions
    $( document ).ready(function() {
      const eFacility = $('#facility-type').val();
      if (eFacility === '1') {
        $('.room-property').hide();
        $('.villa-property').show();
        $('.house-property').show();
        $('#facility-free').val('');
      } else if (eFacility === '2') {
        $('.villa-property').hide();
        $('.room-property').hide();
        $('.house-property').show();
        $('#facility-free').val('');
        $('#facility-pool-area').val('');
      } else {
        $('.villa-property').hide();
        $('.house-property').hide();
        $('.room-property').show();
        $('#facility-stand-room').val('');
        $('#facility-pool-area').val('');
        $('#facility-description').val('');
        $('#facility-floor').val('');
      }
    });
  }

  addFacility() {
    console.log(this.rfFacility.value);
  }
}
