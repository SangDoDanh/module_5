import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Words} from '../model/words';
import {DictionaryServiceService} from '../svice/dictionary-service.service';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  word: Words;
  eng: string;

  // tslint:disable-next-line:variable-name
  constructor(private _activatedRoute: ActivatedRoute, private _dictionaryServiceService: DictionaryServiceService) { }

  ngOnInit(): void {
    this.eng = this._activatedRoute.snapshot.params.index;
    this.word = this._dictionaryServiceService.getWords(this.eng);
  }

}
