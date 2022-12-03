import { Component, OnInit } from '@angular/core';
import {TickService} from '../service/tick.service';
import {GaraService} from '../service/gara.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {Gara} from '../model/gara';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ticket-add',
  templateUrl: './ticket-add.component.html',
  styleUrls: ['./ticket-add.component.css']
})
export class TicketAddComponent implements OnInit {

  rfTicket: FormGroup;
  garages: Gara[];
  garageDefault: Gara = {
    id: 1,
    name: "garage1"
  }

  compareGarage(o1: Gara, o2: Gara) {
    return o1.id == o2.id;
  };
  constructor(private _ticketService: TickService,
              private _garageService: GaraService,
              private _formBuilder:FormBuilder,
              private _toastService: ToastrService,
              private _router: Router) { }

  ngOnInit(): void {
    this._garageService.findAll().subscribe(data => {
      this.garages = data;
      this.rfTicket = this._formBuilder.group({
        id: [],
        price:[''],
        start: [''],
        end: [''],
        startDay: [''],
        startHours: [''],
        garage: [this.garageDefault],
        quality: ['']
      });
    });
  }

  createTicket() {
    this._ticketService.create(this.rfTicket.value).subscribe(data => {
      this._router.navigateByUrl('/');
    });
  }
}
