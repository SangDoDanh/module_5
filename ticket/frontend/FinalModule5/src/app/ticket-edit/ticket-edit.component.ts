import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TickService} from '../service/tick.service';
import {GaraService} from '../service/gara.service';
import {Gara} from '../model/gara';
import {ActivatedRoute, Router} from '@angular/router';
import {Ticket} from '../model/ticket';

@Component({
  selector: 'app-ticket-edit',
  templateUrl: './ticket-edit.component.html',
  styleUrls: ['./ticket-edit.component.css']
})
export class TicketEditComponent implements OnInit {

  rfTicket: FormGroup;
  garages: Gara[];
  ticketId: number;
  compareGarage(o1: Gara, o2: Gara){
    return o1.id == o2.id;
  };
  constructor(private _ticketService: TickService,
              private _garageService: GaraService,
              private _formBuilder: FormBuilder,
              private _router: Router,
              private _routerActived: ActivatedRoute) { }

  ngOnInit(): void {
    this._garageService.findAll().subscribe(data => {
      this.garages = data;
    });
    this.ticketId = this._routerActived.snapshot.params.id;
    this._ticketService.findTicketByid(this.ticketId).subscribe(data => {
      this.rfTicket = this._formBuilder.group({
        id: [data.id],
        price:[data.price],
        start: [data.start],
        end: [data.end],
        startDay: [data.startDay],
        startHours: [data.startHours],
        garage: [data.garage],
        quality: [data.quality]
      });
    });
  }

  updateTicket() {
    console.log(this.rfTicket.value);
    this._ticketService.edit(this.rfTicket.value).subscribe(data => {
      this._router.navigateByUrl('/');
    });
  }
}
