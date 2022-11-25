import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductServiceService} from '../service/product-service.service';
import {Product} from '../module/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  rfProduct: FormGroup;
  productEdit: Product;
  productId: number;

  // tslint:disable-next-line:variable-name max-line-length
  constructor(private _activatedRoute: ActivatedRoute,
              private _productService: ProductServiceService,
              private _formBuilder: FormBuilder, private router: Router) {
    this.productId = this._activatedRoute.snapshot.params.id;
    this.productEdit = this._productService.getProductById(this.productId);
  }

  ngOnInit(): void {
    this.rfProduct = this._formBuilder.group({
      productName: [this.productEdit.name],
      productDescription: [this.productEdit.description],
      productPrice: [this.productEdit.price]
    });
  }

  saveProduct() {
    this.productEdit.name = this.rfProduct.value.productName;
    this.productEdit.price = this.rfProduct.value.productPrice;
    this.productEdit.description = this.rfProduct.value.productDescription;
    this.router.navigateByUrl('/product').then(r => null);
  }
}
