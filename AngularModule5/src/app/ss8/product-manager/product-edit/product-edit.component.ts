import {Component, OnInit} from '@angular/core';
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
  productEdit: Product;
  rfProduct: FormGroup;
  productId: number;
  categorys: Category[];

  compeCategory(o1: Category, o2: Category) {
    return o1.id === o2.id;
  }
  // tslint:disable-next-line:variable-name max-line-length
  constructor(private _activatedRoute: ActivatedRoute,
              private _categoryService: CategoryService,
              private _productService: ProductServiceService,
              private _formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.productId = this._activatedRoute.snapshot.params.id;
    this._categoryService.findAll().subscribe(data => {
      this.categorys = data;
    });
    this._productService.getProductById(this.productId).subscribe(productEdit => {
      this.productEdit = productEdit;
      this.rfProduct = this._formBuilder.group({
        id: [this.productId],
        name: [productEdit.name],
        description: [productEdit.description],
        price: [productEdit.price],
        category: [productEdit.category]
      });
    });
  }

  saveProduct() {
    console.log(this.rfProduct.value.category);
    this._productService.save(this.rfProduct.value).subscribe(value => {
      this.router.navigateByUrl('/product').then(r => null);
    });
  }
}
import {Category} from '../module/Category';

import {CategoryService} from '../service/category.service';
