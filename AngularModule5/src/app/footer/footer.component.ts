import { Component, OnInit } from '@angular/core';
import {faPhone, faEnvelope, faMap} from '@fortawesome/free-solid-svg-icons';
import {faYoutube, faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faYoutube = faYoutube;
  faFacebook  = faFacebook;
  faTwitter  = faTwitter;
  faPhone = faPhone;
  faLocation = faMap;
  faEnvelope = faEnvelope;
  constructor() { }

  ngOnInit(): void {
  }

}
