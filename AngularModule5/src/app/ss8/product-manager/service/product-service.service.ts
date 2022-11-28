import { Injectable } from '@angular/core';
import {Product} from '../module/product';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  // tslint:disable-next-line:variable-name
  private _message: string;

  // tslint:disable-next-line:variable-name
  constructor(private _httpClient: HttpClient) {
  }

  get message(): string {
    return this._message;
  }
// tslint:disable-next-line:variable-name
  private _products: Product[];

  findAll(): Observable<Product[]> {
    return this._httpClient.get<Product[]>(environment.URL_API);
  }
  get products(): Product[] {
    return this._products;
  }

  set products(value: Product[]) {
    this._products = value;
  }

  getProductById(productId: number): Observable<Product> {
    return this._httpClient.get<Product>(environment.URL_API + '/' + productId);
  }
  setValueMessage(value: string) {
    this._message = value;
  }
  remove(id: number): Observable<void> {
    return this._httpClient.delete<void>(environment.URL_API + '/' + id);
  }

  save(productEdit: Product): Observable<Product> {
    return this._httpClient.put<Product>(environment.URL_API + '/' + productEdit.id, productEdit);
  }
}
