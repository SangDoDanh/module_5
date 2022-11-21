import { Component, OnInit } from '@angular/core';
import {faBath, faPlaneDeparture, faCar, faBed} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {

  faBath = faBath;
  faPlaneDeparture = faPlaneDeparture;
  faCar = faCar;
  faBed = faBed;
  constructor() { }
  ngOnInit(): void {
  }

}
