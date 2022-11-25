import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductServiceService} from '../service/product-service.service';
import {Product} from '../module/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId: number;

  productDetail: Product;
  // tslint:disable-next-line:variable-name
  constructor(private _activatedRoute: ActivatedRoute, private _productService: ProductServiceService) {
    this.productId = this._activatedRoute.snapshot.params.id;
    this.productDetail = this._productService.getProductById(this.productId);
  }
  ngOnInit(): void {
  }

}
