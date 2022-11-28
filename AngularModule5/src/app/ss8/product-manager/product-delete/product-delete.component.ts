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
              private _formBuilder: FormBuilder, private router: Router) {  }

  ngOnInit(): void {
    this.productId = this._activatedRoute.snapshot.params.id;
    this._productService.getProductById(this.productId).subscribe(productDelete => {
      this.rfProduct = this._formBuilder.group({
        name: [productDelete.name],
        description: [productDelete.description],
        price: [productDelete.price],
        id: [productDelete.id],
        category: [productDelete.category.name]
      });
      this._productService.setValueMessage('');
    });
  }
  saveProduct() {
    // @ts-ignore
    this._productService.remove(this.rfProduct.value.id).subscribe(() => {
      this._productService.setValueMessage('Remove ' + this.rfProduct.value.name + ' Ok');
      this.router.navigateByUrl('/product').then(r => null);

    });
  }

}
