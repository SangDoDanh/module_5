import { Component, OnInit } from '@angular/core';
import {faSearch, faSignIn, faUserPlus} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faSearch = faSearch;
  faSign = faSignIn;
  faUserPlus = faUserPlus;
  constructor() { }

  ngOnInit(): void {
  }

}
