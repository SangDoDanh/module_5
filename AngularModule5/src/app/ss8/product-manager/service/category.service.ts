import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../module/Category';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  // tslint:disable-next-line:variable-name
  constructor(private _httpClient: HttpClient) { }

  findAll(): Observable<Category[]> {
    return this._httpClient.get<Category[]>(environment.URL_API_CATEGORY);
  }

  getCategoryById(id: number): Observable<Category> {
    return this._httpClient.get<Category>(environment.URL_API_CATEGORY + '/' + id);
  }
}
