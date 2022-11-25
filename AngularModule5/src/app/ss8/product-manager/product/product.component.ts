import { Component, OnInit } from '@angular/core';
import {Product} from '../module/product';
import {ProductServiceService} from '../service/product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  message: string;
  // tslint:disable-next-line:variable-name
  constructor(private _productService: ProductServiceService) {
    this.products = this._productService.products;
  }

  ngOnInit(): void {
    // this.message = this._productService.message;
    this.message = this._productService.message;
  }

}
