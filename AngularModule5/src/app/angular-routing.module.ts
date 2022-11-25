import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DictionaryComponent} from './ss8/dictionary/dictionary.component';
import {DictionaryDetailComponent} from './ss8/dictionary-detail/dictionary-detail.component';
import {ProductComponent} from './ss8/product-manager/product/product.component';
import {ProductDetailComponent} from './ss8/product-manager/product-detail/product-detail.component';
import {ProductEditComponent} from './ss8/product-manager/product-edit/product-edit.component';
import {ProductDeleteComponent} from './ss8/product-manager/product-delete/product-delete.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'product'},
  {path: 'dictionary', component: DictionaryComponent},
  {path: 'dictionary-detail/:index', component: DictionaryDetailComponent},
  {path: 'product', component: ProductComponent},
  {path: 'product-detail/:id', component: ProductDetailComponent},
  {path: 'product-edit/:id', component: ProductEditComponent},
  {path: 'product-delete/:id', component: ProductDeleteComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AngularRoutingModule { }
