import { Component, OnInit } from '@angular/core';
import {DictionaryServiceService} from '../svice/dictionary-service.service';
import {Words} from '../model/words';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  dictionarySearch: Words[];

  // tslint:disable-next-line:variable-name
  constructor(private _dictionaryServiceService: DictionaryServiceService) { }
  dictionaryList: Words[];
  ngOnInit(): void {
    this.dictionaryList = this._dictionaryServiceService.dictionaryList;
  }

  search(wordSearch: HTMLInputElement) {
    if (wordSearch.value === '') {
      this.dictionaryList = this._dictionaryServiceService.dictionaryList;
    } else {
      this.dictionaryList = this._dictionaryServiceService.search(wordSearch.value);
    }
  }
}
