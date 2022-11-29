import { Component, OnInit } from '@angular/core';
import {Product} from '../module/product';
import {ProductServiceService} from '../service/product-service.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  message: string;
  // tslint:disable-next-line:variable-name
  constructor(private _productService: ProductServiceService, private _toastrService: ToastrService) {
    this._productService.findAll().subscribe(data => {
      this.products = data;
    });
  }

  ngOnInit(): void {
    this.message = this._productService.message;
  }

  showMessageSuccess() {
      this._toastrService.success('Sieu cap vipro', 'Succsess', {
        timeOut: 1000,
        progressBar: true,
        positionClass: 'toast-top-right',
        easing: 'ease-in'
      });
  }

  showMessageError() {
    this._toastrService.error('Sieu cap vipro', 'Succsess', {
      timeOut: 1000,
      progressBar: true,
      positionClass: 'toast-top-right',
      easing: 'ease-in'
    });
  }
}
