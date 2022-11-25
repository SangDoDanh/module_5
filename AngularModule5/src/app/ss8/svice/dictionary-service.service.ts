import { Injectable } from '@angular/core';
import {Words} from '../model/words';

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  // tslint:disable-next-line:variable-name
  private _dictionaryList: Words[] = [
    {english: 'hello', vietnam: ['xin chao', 'chao']},
    {english: 'dog', vietnam: ['cho', 'con cho']},
    {english: 'cat', vietnam: ['meo', 'con meo']},
    {english: 'book', vietnam: ['sach', 'quyen sach']},
    {english: 'meta', vietnam: []},
  ];
  constructor() { }

  get dictionaryList(): Words[] {
    return this._dictionaryList;
  }

  set dictionaryList(value: Words[]) {
    this._dictionaryList = value;
  }
  public getWords(eng: string): Words {
    return this._dictionaryList.find(value => value.english === eng);
  }

  search(value: string) {
    return this._dictionaryList.filter(word => word.english.includes(value));
  }
}
