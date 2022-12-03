import { Component, OnInit } from '@angular/core';
import {Ticket} from '../model/ticket';
import {TickService} from '../service/tick.service';
import {Gara} from '../model/gara';
import {GaraService} from '../service/gara.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  tickets: Ticket[];
  p: string | number;
  garages: Gara[];
  rfSearch:FormGroup;

  startDay = '';
  endDay = '';
  garageDefault: Gara = {
    id: 1,
    name: "garage1",
    status: false
  }
  ticketBook: Ticket = {
    id: null,
    price: null,
    start: '',
    end: '',
    startDay: '',
    startHours: '',
    garage: this.garageDefault,
    quality: null,
    status: false
  };

  compareGarage(o1: Gara, o2: Gara) {
    return o1.id == o2.id;
  };
  constructor(private _ticketService: TickService,
              private _garageService: GaraService,
              private _formBuilder:FormBuilder,
              private _toastService: ToastrService) { }

  ngOnInit(): void {
    this._ticketService.findAll().subscribe(data => {
      this.tickets = data;
    });
    this._garageService.findAll().subscribe(data => {
      this.garages = data;
    });
    this.rfSearch = this._formBuilder.group({
      start:[''],
      end:[''],
      startDay:[''],
      endDay:[''],
    })
  }
  showMessage(mess: string) {
    this._toastService.success(mess, '', {
      timeOut: 1000,
      positionClass: 'toast-top-right',
      easing: 'ease-in',
      progressBar: true
    });
  }

  bookTicket(id: number) {
    this._ticketService.findTicketByid(id).subscribe(data => {
      data.quality = data.quality - 1;
      this._ticketService.book(data).subscribe(value => {
        this.showMessage('Đặt vé thành công');
        document.getElementById('close-modal-book').click();
        this._ticketService.findAll().subscribe(data => {
          this.tickets = data;
        });
      });
    });
  }

  search() {
    this.setDay();
    this._ticketService.search(this.rfSearch.value).subscribe(data => {
      this.tickets = data;
    });
  }

  setValue(id: number) {
    this._ticketService.findTicketByid(id).subscribe(data => {
      this.ticketBook = data;
    });
  }

  private setDay() {
    if(!this.rfSearch.value.startDay) {
      this.rfSearch.value.startDay = '0001-01-01';
    }
    if(!this.rfSearch.value.endDay) {
      this.rfSearch.value.endDay = '9999-12-31';
    }
  }
}
