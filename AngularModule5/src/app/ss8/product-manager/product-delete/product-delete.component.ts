import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductServiceService} from '../service/product-service.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Product} from '../module/product';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  rfProduct: FormGroup;
  productDelete: Product;
  productId: number;

  constructor(private _activatedRoute: ActivatedRoute,
              private _productService: ProductServiceService,
              private _formBuilder: FormBuilder, private router: Router) {
    this.productId = this._activatedRoute.snapshot.params.id;
    this.productDelete = this._productService.getProductById(this.productId);
  }

  ngOnInit(): void {
    this.rfProduct = this._formBuilder.group({
      productName: [this.productDelete.name],
      productDescription: [this.productDelete.description],
      productPrice: [this.productDelete.price]
    });
  }
  saveProduct() {
    // @ts-ignore
    this._productService.setValueMessage('Remove ' + this.productDelete.name + ' Ok');
    this._productService.remove(this.productDelete);
    this.router.navigateByUrl('/product').then(r => null);
  }

}
